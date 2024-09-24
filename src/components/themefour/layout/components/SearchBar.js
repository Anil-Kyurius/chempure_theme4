import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { setCookie, getCookie } from "cookies-next";

import InitialLoader from "@public/InitialLoader.gif";
import Api2 from "@/api/api2";
import searchicon from "@public/ThemeFour/Image/Search_icon.svg";

const Autocomplete = dynamic(() => import("./Autocomplete"));

const SearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const getSearchvalue = searchParams.get("query");
  const inputRef = useRef(null);
  const quickViewRef = useRef(null);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionsFull, setSuggestionsFull] = useState([]);
  const [recentSearch, setRecentSearch] = useState([]);
  const [suggestionIndex, setSuggestionIndex] = useState(null);
  const [suggestionsActive, setSuggestionsActive] = useState(false);
  const [value, setValue] = useState("");
  const [quickvalue, setQuickValue] = useState("");
  const [dataType, setdataType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearchCombain, setIsLoadingSearchCombain] = useState(false);
  const [timer, setTimer] = useState(null);
  const [isVisible_Quick_View, setIsVisible_Quick_View] = useState(false);
  const [checkJsData, setcheckJsData] = useState(false);
  // console.log('checkJsData',checkJsData);
  // console.log('isVisible_Quick_View',isVisible_Quick_View);
  // enter key no api call for suggestions
  const [noApicall, setNoApicall] = useState(false);

  const fetchData = async (value) => {
    if (!value) return;
    setcheckJsData(true);
    setIsLoadingSearchCombain(true);
    setIsLoading(true);

    try {
      const response = await Api2.post("/Search_combine/searchCombine", {
        searchkey: value,
      });
      const { chemicals, labware, catalog } = response.data;
      // setSuggestions([]);

      if (
        chemicals?.products?.length === 1 &&
        !labware?.length &&
        !catalog?.data?.length
      ) {
        setValue("");
        router.push(`/chemical/product/${chemicals.products[0]?.product_code}`);
      } else if (
        chemicals?.products?.length > 1 &&
        !labware?.length &&
        !catalog?.data?.length
      ) {
        router.push(
          `/chemicalsearch/${encodeURIComponent(
            value
          )}?query=${value}&page_no=1`
        );
      } else if (
        labware?.length === 1 &&
        !chemicals?.products?.length &&
        !catalog?.data?.length
      ) {
        router.push(`/labware/product/${labware[0]?.product_code}`);
      } else if (
        catalog?.data?.length === 1 &&
        !chemicals?.products?.length &&
        !labware?.length
      ) {
        router.push(`/${catalog.data[0]?.url_name}`);
      } else {
        router.push(`/search/${encodeURIComponent(value)}?query=${value}`, {
          state: { value, data: response.data },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingSearchCombain(false);
      setIsLoading(false);

      // recent result
      let recentSearches = JSON.parse(getCookie("recentSearches") || "[]");
      recentSearches = recentSearches.filter((term) => term !== value);
      recentSearches.unshift(value);
      recentSearches = recentSearches.slice(0, 5);
      setCookie("recentSearches", JSON.stringify(recentSearches), 7); // Store for 7 days
    }
  };

  const handleChange = (e) => {
    // console.log('e',e);
    const query = e.target.value;
    // console.log('query',query);
    setValue(query);
    clearTimeout(timer);

    if (query.length <= 2 && checkJsData) {
      suggestionsActive && setSuggestionsActive(false);
      return;
    }

    setNoApicall(false);
    setSuggestionsActive(false);
    setSuggestionIndex(null);

    const newTimer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await Api2.post("/Cas_Index/getjsdata", {
          term: query.toLowerCase(),
          login_id: "guestuser",
        });
        setSuggestions(response.data.length !== 0 ? response.data : []);
        const singleArray = Object.keys(response.data).flatMap((category) =>
          response.data[category].map((item) => ({ ...item, category }))
        );
        setSuggestionsFull(singleArray);
        if (
          singleArray.length == 1 &&
          singleArray[0].source === "catalogue_no"
        ) {
          setIsVisible_Quick_View(true);
          setQuickValue(singleArray[0].label);
          setValue(singleArray[0].label);
          setdataType(singleArray[0].value);
        } else {
          setSuggestionsActive(true);
          setIsVisible_Quick_View(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }, 700);
    setTimer(newTimer);
  };

  // only for search icon click
  const searchiconHanlder = useCallback(
    (value) => {
      if (value.length >= 3) {
        fetchData(value);
        setSuggestions([]);
        setSuggestionsActive(false);
      }
    },
    [fetchData]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 38 && suggestionsFull.length !== 0) {
        if (suggestionIndex === null || suggestionIndex === 0) return;
        setSuggestionIndex(suggestionIndex - 1);
        setValue(suggestionsFull[suggestionIndex - 1].label);
      } else if (e.keyCode === 40 && suggestionsFull.length !== 0) {
        if (suggestionIndex == null) {
          setSuggestionIndex(0);
          setValue(suggestionsFull[0].label);
        } else if (suggestionIndex + 1 < suggestionsFull.length) {
          setSuggestionIndex(suggestionIndex + 1);
          setValue(suggestionsFull[suggestionIndex + 1].label);
        }
      } else if (e.keyCode === 13 && e.target.value.length >= 3) {
        setcheckJsData(true);

        fetchData(e.target.value);
        setNoApicall(true);
        setSuggestionIndex(0);
        setSuggestionsActive(false);
        setIsVisible_Quick_View(false);

        setSuggestions([]);
      }
    },
    [suggestionsFull, suggestionIndex, fetchData]
  );

  const handleFocus = () => {
    if (value !== "") {
      setSuggestionsActive(true);
      handleChange({ target: { value } });
    } else {
      const searches = getCookie("recentSearches");
      setRecentSearch(searches ? JSON.parse(searches) : []);
      setSuggestionsActive(true);
    }
  };

  useEffect(() => {
    if (getSearchvalue) {
      setValue(getSearchvalue);
    } else {
      setNoApicall(false);
      setValue(""); // Clear the input when the query parameter is not present
      setSuggestionsActive(false);
      setSuggestionsFull([]);
      setSuggestions([]);
      setIsVisible_Quick_View(false);
    }
  }, [getSearchvalue]);

  return (
    <div className="relative z-50">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        placeholder="Search"
        disabled={isLoadingSearchCombain}
        onFocus={handleFocus}
        className={`border border-gray-200 rounded-sm	${
          suggestionsActive ? `outline-none  ` : "rounded"
        } w-full h-8   font-normal  pl-4 ${
          isLoadingSearchCombain ? "opacity-50 cursor-not-allowed" : ""
        }`}
        ref={inputRef}
      />

      {!isLoading ? (
        <Image
          src={searchicon}
          alt="search"
          className="absolute -translate-y-1/2 top-1/2 right-4 cursor-pointer"
          onClick={() => searchiconHanlder(value)}
        />
      ) : (
        <div className="absolute left-2 top-1">
          <Image
            src={InitialLoader}
            alt="InitialLoader"
            className="w-8 h-8"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}

      {suggestionsActive && !noApicall && (
        <Autocomplete
          suggestions={suggestions}
          suggestionIndex={suggestionIndex}
          fetchData={fetchData}
          setValue={setValue}
          setQuickValue={setQuickValue}
          value={value}
          setSuggestionsActive={setSuggestionsActive}
          setIsVisible={setIsVisible_Quick_View}
          isVisible={isVisible_Quick_View}
          setdataType={setdataType}
          inputRef={inputRef}
          quickViewRef={quickViewRef}
          recentSearch={recentSearch}
        />
      )}

      {isLoadingSearchCombain && (
        <div className=" fixed h-screen w-screen   inset-0 flex justify-center items-center bg-[#0003]">
          <Image
            src={InitialLoader}
            alt="InitialLoader"
            width={120}
            height={120}
            className="w-auto h-auto object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
