import dayjs from "dayjs";
import Head from "next/head";
import { useState } from "react";

import Datepicker from "../src";
import { COLORS, DATE_LOOKING_OPTIONS } from "../src/constants";

export default function Playground() {
    const [value, setValue] = useState({
        startDate: null,
        endDate: null
    });
    const [primaryColor, setPrimaryColor] = useState("blue");
    const [useRange, setUseRange] = useState(true);
    const [showFooter, setShowFooter] = useState(false);
    const [showShortcuts, setShowShortcuts] = useState(false);
    const [asSingle, setAsSingle] = useState(false);
    const [placeholder, setPlaceholder] = useState("");
    const [separator, setSeparator] = useState("~");
    const [i18n, setI18n] = useState("en");
    const [disabled, setDisabled] = useState(false);
    const [inputClassName, setInputClassName] = useState("");
    const [containerClassName, setContainerClassName] = useState("");
    const [calendarContainerClassName, setCalendarContainerClassName] = useState("");
    const [toggleClassName, setToggleClassName] = useState("");
    const [baseDayClassName, setBaseDayClassName] = useState("");
    const [disabledClassName, setDisabledClassName] = useState("");
    const [todayClassName, setTodayClassName] = useState("");
    const [selectedClassName, setSelectedClassName] = useState("");
    const [selectedStartClassName, setSelectedStartClassName] = useState("");
    const [selectedFullClassName, setSelectedFullClassName] = useState("");
    const [selectedEndClassName, setSelectedEndClassName] = useState("");
    const [rangeClassName, setRangeClassName] = useState("");
    const [btnClassName, setBtnClassName] = useState("");
    const [btnActiveClassName, setBtnActiveClassName] = useState("");
    const [btnDisabledClassName, setBtnDisabledClassName] = useState("");
    const [btnFullRoundClassName, setBtnFullRoundClassName] = useState("");
    const [btnContainerClassName, setBtnContainerClassName] = useState("");
    const [displayFormat, setDisplayFormat] = useState("YYYY-MM-DD");
    const [readOnly, setReadOnly] = useState(false);
    const [minDate, setMinDate] = useState("");
    const [maxDate, setMaxDate] = useState("");
    const [dateLooking, setDateLooking] = useState(true);
    const [disabledDates, setDisabledDates] = useState([]);
    const [newDisabledDates, setNewDisabledDates] = useState({ startDate: "", endDate: "" });
    const [startFrom, setStartFrom] = useState("2023-03-01");
    const [startWeekOn, setStartWeekOn] = useState("");

    const handleChange = (value, e) => {
        setValue(value);
        console.log(e);
        console.log("value", value);
    };
    return (
        <div className="px-4 py-8">
            <Head>
                <title>react-tailwindcss-datepicker PlayGround</title>
            </Head>
            <h1 className="text-center font-semibold text-xl">
                <pre className="text-gray-600 text-lg bg-gray-200 max-w-max mx-auto px-2 rounded">
                    react-tailwindcss-datepicker
                </pre>
                <span className="text-gray-700">PlayGround</span>
            </h1>
            <div className="hidden rounded-l-lg rounded-r-lg text-green-100 m-2 bg-green-500/10 bg-green-500/20 bg-green-500/30 bg-green-500/40 bg-green-500/50 bg-green-500/60 bg-green-500/70 bg-green-500/80 bg-green-500/90 bg-green-500 hover:bg-green-500/50 hover:bg-green-500/10 hover:border-green-500 hover:border"></div>

            <div className="max-w-md mx-auto my-4">
                <Datepicker
                    value={value}
                    primaryColor={primaryColor}
                    onChange={handleChange}
                    useRange={useRange}
                    showFooter={showFooter}
                    showShortcuts={showShortcuts}
                    configs={{
                        shortcuts: {
                            today: "TText",
                            yesterday: "YText",
                            past: period => `P-${period} Text`,
                            currentMonth: "CMText",
                            pastMonth: "PMText",
                            last3Days: {
                                text: "Last 3 days",
                                period: {
                                    start: new Date(new Date().setDate(new Date().getDate() - 3)),
                                    end: new Date()
                                }
                            },
                            thisDay: {
                                text: "This Day",
                                period: {
                                    start: new Date(),
                                    end: new Date()
                                }
                            },
                            next8Days: {
                                text: "Next 8 days",
                                period: {
                                    start: new Date(),
                                    end: new Date(new Date().setDate(new Date().getDate() + 8))
                                }
                            }
                        },
                        footer: {
                            cancel: "CText",
                            apply: "AText"
                        }
                    }}
                    asSingle={asSingle}
                    placeholder={placeholder}
                    separator={separator}
                    startFrom={
                        startFrom.length && dayjs(startFrom).isValid() ? new Date(startFrom) : null
                    }
                    i18n={i18n}
                    disabled={disabled}
                    inputClassName={inputClassName}
                    containerClassName={containerClassName}
                    toggleClassName={toggleClassName}
                    calendarContainerClassName={calendarContainerClassName}
                    baseDayClassName={baseDayClassName}
                    disabledClassName={disabledClassName}
                    selectedClassName={selectedClassName}
                    selectedStartClassName={selectedStartClassName}
                    selectedFullClassName={selectedFullClassName}
                    selectedEndClassName={selectedEndClassName}
                    rangeClassName={rangeClassName}
                    btnClassName={btnClassName}
                    btnActiveClassName={btnActiveClassName}
                    btnDisabledClassName={btnDisabledClassName}
                    btnFullRoundClassName={btnFullRoundClassName}
                    btnContainerClassName={btnContainerClassName}
                    todayClassName={todayClassName}
                    displayFormat={displayFormat}
                    readOnly={readOnly}
                    minDate={minDate}
                    maxDate={maxDate}
                    dateLooking={dateLooking}
                    disabledDates={disabledDates}
                    startWeekOn={startWeekOn}
                    toggleIcon={isEmpty => {
                        return isEmpty ? "Select Date" : "Clear";
                    }}
                    popoverDirection={"down"}
                    // classNames={{
                    //     input: ({ disabled, readOnly, className }) => {
                    //         if (disabled) {
                    //             return "opacity-40";
                    //         }
                    //         return `className`;
                    //     },
                    //     toggleButton: () => {
                    //         return "bg-blue-300 ease-in-out";
                    //     },
                    //     footer: () => {
                    //         return `p-4 border-t border-gray-600 flex flex-row flex-wrap justify-end`;
                    //     }
                    // }}
                />
            </div>
            <div className="py-4 max-w-3xl mx-auto flex flex-row flex-wrap">
                <div className="w-full sm:w-1/3 pr-2 flex flex-row flex-wrap sm:flex-col">
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="useRange"
                                checked={useRange}
                                onChange={e => setUseRange(e.target.checked)}
                            />
                            <label className="block" htmlFor="useRange">
                                Use Range
                            </label>
                        </div>
                    </div>
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="showFooter"
                                checked={showFooter}
                                onChange={e => setShowFooter(e.target.checked)}
                            />
                            <label className="block" htmlFor="showFooter">
                                Show Footer
                            </label>
                        </div>
                    </div>
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="showShortcuts"
                                checked={showShortcuts}
                                onChange={e => setShowShortcuts(e.target.checked)}
                            />
                            <label className="block" htmlFor="showShortcuts">
                                Show Shortcuts
                            </label>
                        </div>
                    </div>
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="asSingle"
                                checked={asSingle}
                                onChange={e => setAsSingle(e.target.checked)}
                            />
                            <label className="block" htmlFor="asSingle">
                                As Single
                            </label>
                        </div>
                    </div>
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="disabled"
                                checked={disabled}
                                onChange={e => setDisabled(e.target.checked)}
                            />
                            <label className="block" htmlFor="disabled">
                                Disabled
                            </label>
                        </div>
                    </div>
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="readOnly"
                                checked={readOnly}
                                onChange={e => setReadOnly(e.target.checked)}
                            />
                            <label className="block" htmlFor="readOnly">
                                Read Only
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-2/3 flex flex-col sm:grid sm:grid-cols-2 gap-2 mb-2">
                    <div>
                        <label className="block" htmlFor="primaryColor">
                            Primary Color
                        </label>
                        <select
                            className="rounded block w-full border-gray-200 border px-4 py-2"
                            id="primaryColor"
                            value={primaryColor}
                            onChange={e => {
                                setPrimaryColor(e.target.value);
                            }}
                        >
                            {COLORS.map((color, i) => (
                                <option key={i} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block" htmlFor="placeholder">
                            Placeholder
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="placeholder"
                            value={placeholder}
                            onChange={e => {
                                setPlaceholder(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="separator">
                            Separator
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="separator"
                            value={separator}
                            onChange={e => {
                                setSeparator(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="startFrom">
                            Start From
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="startFrom"
                            value={startFrom}
                            onChange={e => {
                                setStartFrom(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="minDate">
                            Minimum Date
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="minDate"
                            value={minDate}
                            onChange={e => {
                                setMinDate(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="maxDate">
                            Maximum Date
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="maxDate"
                            value={maxDate}
                            onChange={e => {
                                setMaxDate(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="dateLooking">
                            Date Looking
                        </label>
                        <select
                            className="rounded block w-full border-gray-200 border px-4 py-2"
                            id="dateLooking"
                            value={dateLooking}
                            onChange={e => {
                                setDateLooking(e.target.value);
                            }}
                        >
                            {DATE_LOOKING_OPTIONS.map((option, i) => (
                                <option key={i} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block" htmlFor="i18n">
                            i18n
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="i18n"
                            value={i18n}
                            onChange={e => {
                                setI18n(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="displayFormat">
                            Display Format
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="displayFormat"
                            value={displayFormat}
                            onChange={e => {
                                setDisplayFormat(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="inputClassName">
                            Input Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="inputClassName"
                            value={inputClassName}
                            onChange={e => {
                                setInputClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="containerClassName">
                            Container Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="containerClassName"
                            value={containerClassName}
                            onChange={e => {
                                setContainerClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="toggleClassName">
                            Toggle Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="toggleClassName"
                            value={toggleClassName}
                            onChange={e => {
                                setToggleClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="calendarContainerClassName">
                            Calendar Container Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="calendarContainerClassName"
                            value={calendarContainerClassName}
                            onChange={e => {
                                setCalendarContainerClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="baseDayClassName">
                            Base Day Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="baseDayClassName"
                            value={baseDayClassName}
                            onChange={e => {
                                setBaseDayClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="disabledClassName">
                            Disabled Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="disabledClassName"
                            value={disabledClassName}
                            onChange={e => {
                                setDisabledClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="todayClassName">
                            Today Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="todayClassName"
                            value={todayClassName}
                            onChange={e => {
                                setTodayClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="selectedClassName">
                            Selected Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="selectedClassName"
                            value={selectedClassName}
                            onChange={e => {
                                setSelectedClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="selectedStartClassName">
                            Selected Start Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="selectedStartClassName"
                            value={selectedStartClassName}
                            onChange={e => {
                                setSelectedStartClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="selectedFullClassName">
                            Selected Full Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="selectedFullClassName"
                            value={selectedFullClassName}
                            onChange={e => {
                                setSelectedFullClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="selectedEndClassName">
                            Selected End Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="selectedEndClassName"
                            value={selectedEndClassName}
                            onChange={e => {
                                setSelectedEndClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="rangeClassName">
                            Range Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="rangeClassName"
                            value={rangeClassName}
                            onChange={e => {
                                setRangeClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="btnClassName">
                            Button Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="btnClassName"
                            value={btnClassName}
                            onChange={e => {
                                setBtnClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="btnActiveClassName">
                            Button Active Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="btnActiveClassName"
                            value={btnActiveClassName}
                            onChange={e => {
                                setBtnActiveClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="btnDisabledClassName">
                            Button Disabled Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="btnDisabledClassName"
                            value={btnDisabledClassName}
                            onChange={e => {
                                setBtnDisabledClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="btnFullRoundClassName">
                            Button Full Round Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="btnFullRoundClassName"
                            value={btnFullRoundClassName}
                            onChange={e => {
                                setBtnFullRoundClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="btnContainerClassName">
                            Button Container Class
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="btnContainerClassName"
                            value={btnContainerClassName}
                            onChange={e => {
                                setBtnContainerClassName(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label className="block" htmlFor="startWeekOnClassName">
                            Start Week On
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="startWeekOnClassName"
                            value={startWeekOn}
                            onChange={e => {
                                setStartWeekOn(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="w-full grid sm:grid-cols-3">
                    <div className="sm:col-start-2 sm:col-span-2 p-2 border-t grid grid-cols-2">
                        <h1 className="mb-2 text-lg font-semibold text-center col-span-3">
                            Disable Dates
                        </h1>
                        <div className="mb-2 sm:col-span-2 mr-2">
                            <label className="block" htmlFor="startDate">
                                Start Date
                            </label>
                            <input
                                className="rounded border px-4 py-2 border-gray-200 sm:w-full w-3/4"
                                id="startDate"
                                value={newDisabledDates.startDate}
                                onChange={e => {
                                    setNewDisabledDates(prev => {
                                        return {
                                            ...prev,
                                            startDate: e.target.value
                                        };
                                    });
                                }}
                            />
                        </div>
                        <div>
                            <label className="block" htmlFor="endDate">
                                End Date
                            </label>
                            <input
                                className="rounded border px-4 py-2 border-gray-200 sm:w-full w-3/4"
                                id="endDate"
                                value={newDisabledDates.endDate}
                                onChange={e => {
                                    setNewDisabledDates(prev => {
                                        return {
                                            ...prev,
                                            endDate: e.target.value
                                        };
                                    });
                                }}
                            />
                        </div>
                        <div className="mb-2 col-span-3">
                            <button
                                onClick={() => {
                                    if (
                                        newDisabledDates.startDate !== "" &&
                                        newDisabledDates.endDate !== ""
                                    ) {
                                        setDisabledDates(prev => [...prev, newDisabledDates]);
                                        setNewDisabledDates({ startDate: "", endDate: "" });
                                    }
                                }}
                                className="w-full bg-black text-white text-lg text-center p-2 rounded-lg"
                            >
                                Add
                            </button>
                        </div>
                        <div className="mb-2 grid col-span-3 grid-col-2">
                            {disabledDates.map((range, index) => (
                                <div className="mb-2 p-2" key={index}>
                                    <button
                                        className="bg-red-500 text-white text-center rounded-xl p-2"
                                        onClick={() => {
                                            setDisabledDates(
                                                disabledDates.filter(r => r !== range)
                                            );
                                        }}
                                    >
                                        Delete
                                    </button>
                                    <span className="pl-2">
                                        {range.startDate} - {range.endDate}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center w-full">
                <a
                    href="https://github.com/onesine/react-tailwindcss-datepicker"
                    className="block text-gray-700 hover:text-gray-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-6 h-6"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
