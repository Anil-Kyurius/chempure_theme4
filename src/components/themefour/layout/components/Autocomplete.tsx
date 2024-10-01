import { useEffect, useRef } from "react";

const suggestionTypes = [
  { key: "category", label: "Category" },
  { key: "cas_no", label: "CAS Number" },
  { key: "product_name", label: "Product Name" },
  { key: "catalogue_no", label: "Product Number" },
];
interface Suggestion {
  label: string;
  value: string;
  source: string;
}
interface AutocompleteProps {
  suggestions: Record<any, Suggestion[]>; 
  suggestionIndex: number | null;
  fetchData: (value: string) => Promise<void>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setQuickValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  setSuggestionsActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
  setdataType: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<HTMLInputElement>;
  quickViewRef: React.RefObject<HTMLDivElement>;
  recentSearch: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  suggestions,
  inputRef,
  fetchData,
  setValue,
  setSuggestionsActive,
  value,
  setIsVisible,
  setdataType,
  setQuickValue,
  recentSearch,
}) => {
  const suggestionBoxRef = useRef<HTMLUListElement>(null);

  const handleClick = (label:string, source:string) => {
    setValue(label);
    fetchData(label);
    setSuggestionsActive(false);
    setdataType(source);
  };

  const QuickViewHandler = (label:string, source:string) => {
    setQuickValue(label);
    setdataType(source);
    setIsVisible(true);
  };

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (
        suggestionBoxRef.current &&
        !suggestionBoxRef.current.contains(event.target as Node) &&
        !(inputRef.current === document.activeElement)
      ) {
        setSuggestionsActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <ul
      className="absolute z-40 w-full bg-white mt-1 pb-2"
      ref={suggestionBoxRef}
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      {Object.entries(suggestions).length !== 0 ? (
        suggestionTypes.map(
          ({ key, label }) =>
            suggestions[key] && (
              <ul key={label}>
                <li className="border-b text-xs ml-8 pt-2">
                  <span className="font-medium">{label}</span>
                  {label === "Product Number" &&
                    ` (Hover over an item for a
        Quick View)`}
                </li>

                {suggestions[key].map((suggestion) => (
                  <ul
                    key={suggestion.label}
                    className={`group relative flex justify-between items-center py-1 cursor-pointer
                      ${
                        value === suggestion.label
                          ? "bg-[#0090ff] opacity-60 text-white"
                          : ""
                      }
                      hover:bg-[#0090ff] hover:opacity-60
                    `}
                  >
                    <li
                      className={`text-[#a5b3c6] text-base ml-9  flex-1
      ${value === suggestion.label ? "text-white" : "group-hover:text-white"}`}
                      onClick={() =>
                        handleClick(suggestion.label, suggestion.value)
                      }
                    >
                      {suggestion.label}
                    </li>
                    {suggestion.source === "catalogue_no" && (
                      <li
                        className={`text-xs text-white mr-9 font-bold  group-hover:block   z-50 ${
                          value === suggestion.label ? "block" : "hidden"
                        } `}
                        onClick={() =>
                          QuickViewHandler(suggestion.label, suggestion.value)
                        }
                      >
                        Quick View
                      </li>
                    )}
                  </ul>
                ))}
              </ul>
            )
        )
      ) : (
        <>
          <div className="text-xs font-medium ml-8 mr-1 py-2 leading-3">
            Tip: Add products directly to your cart by simply searching for your
            product number (e.g. AA6102).
          </div>

          {recentSearch.length !== 0 && (
            <>
              <p className="border-b text-xs ml-8 pt-1 font-medium">
                Recent Searches
              </p>

              {recentSearch.map((item, index) => (
                <ul
                  key={item + index}
                  className={`group relative flex justify-between items-center py-1 cursor-pointer
                                      ${
                                        value === item
                                          ? "bg-[#0090ff] opacity-60 text-white"
                                          : ""
                                      }
                                      hover:bg-[#0090ff] hover:opacity-60
                                    `}
                >
                  <li
                    className={`text-[#a5b3c6] text-base ml-9  flex-1
                      ${
                        value === item ? "text-white" : "group-hover:text-white"
                      }`}
                    onClick={() => handleClick(item,'')}
                  >
                    {item}
                  </li>
                </ul>
              ))}
            </>
          )}
        </>
      )}
    </ul>
  );
};

// const Label = ({ casArray, handleClick, labelname, value, setIsVisible }) => {
//   return (
//     <ul>
//       <li className="border-b text-xs ml-8 pt-2">
//         <span className="font-medium">{labelname}</span>
//         {labelname === "Product Number" &&
//           ` (Hover over an item for a
//         Quick View)`}
//       </li>

//       {casArray.map((suggestion) => (
//         <ul
//           key={suggestion.label}
//           className={`group relative flex justify-between items-center py-1 hover:bg-[#0090ff] hover:opacity-60 cursor-pointer
//             ${
//               value === suggestion.label
//                 ? "bg-[#0090ff] opacity-60 text-white"
//                 : ""
//             }
//           `}
//         >
//           <li
//             className={`text-[#a5b3c6] text-base ml-9  flex-1
//       ${value === suggestion.label ? "text-white" : "group-hover:text-white"}`}
//             onClick={() => handleClick(suggestion.label, suggestion.value)}
//           >
//             {suggestion.label}
//           </li>
//           {suggestion.source === "catalogue_no" && (
//             <li
//               className={`text-xs text-white mr-9 font-bold  group-hover:block   z-50 ${
//                 value === suggestion.label ? "block" : "hidden"
//               } `}
//               onClick={() =>
//                 QuickViewHandler(suggestion.label, suggestion.value)
//               }
//             >
//               Quick View
//             </li>
//           )}
//         </ul>
//       ))}
//     </ul>
//   );
// };
export default Autocomplete;
