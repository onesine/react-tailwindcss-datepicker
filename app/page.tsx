"use client";

import Head from "next/head";
import { useState } from "react";

import Datepicker, {
    ColorKeys,
    DateLookingType,
    DateRangeType,
    DateValueType,
    PopoverDirectionType,
    WeekStringType
} from "../src";
import CloseIcon from "../src/components/icons/CloseIcon";
import { COLORS, DATE_LOOKING_OPTIONS } from "../src/constants";
import { dateFormat, dateIsValid } from "../src/libs/date";

const WEEK_DAY = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
const POPOVER_DIRECTION = ["up", "down"] as const;

export default function Playground() {
    const [value, setValue] = useState<DateValueType>({
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
    const [toggleClassName, setToggleClassName] = useState("");
    const [displayFormat, setDisplayFormat] = useState("YYYY-MM-DD");
    const [readOnly, setReadOnly] = useState(false);
    const [minDate, setMinDate] = useState("");
    const [maxDate, setMaxDate] = useState("");
    const [dateLooking, setDateLooking] = useState<DateLookingType | undefined>(undefined);
    const [disabledDates, setDisabledDates] = useState<DateRangeType[]>([]);
    const [newDisabledDates, setNewDisabledDates] = useState({ startDate: "", endDate: "" });
    const [startFrom, setStartFrom] = useState(dateFormat(new Date(), "YYYY-MM-DD") || "");
    const [startWeekOn, setStartWeekOn] = useState<WeekStringType>("mon");
    const [required, setRequired] = useState(false);
    const [popoverDirection, setPopoverDirection] = useState<PopoverDirectionType>("down");
    const [appendToBody, setAppendToBody] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

            {/* Modal */}
            {isModalOpen && appendToBody && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
                    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto">
                        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
                            <h2 className="text-xl font-bold mb-4">Datepicker in Modal</h2>
                            <p className="mb-4 text-gray-600">
                                Using appendToBody prevents the datepicker from being cut off by
                                modal overflow
                            </p>
                            <div className="mb-4">
                                <Datepicker
                                    value={value}
                                    onChange={setValue}
                                    appendToBody
                                    displayFormat="MMM DD, YYYY"
                                />
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                <CloseIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </>
            )}

            <div className="max-w-md mx-auto my-4">
                <Datepicker
                    value={value}
                    primaryColor={primaryColor as ColorKeys}
                    onChange={(value, e) => {
                        setValue(value);
                        console.log(e);
                        console.log("value", {
                            startDate: value?.startDate?.toLocaleDateString() || null,
                            endDate: value?.endDate?.toLocaleDateString() || null
                        });
                    }}
                    useRange={useRange}
                    showFooter={showFooter}
                    showShortcuts={showShortcuts}
                    configs={{
                        shortcuts: {
                            today: "Today",
                            yesterday: "Yesterday",
                            past: period => `Last ${period} days`,
                            currentMonth: "This month",
                            pastMonth: "Last month",
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
                    appendToBody={appendToBody}
                    asSingle={asSingle}
                    placeholder={placeholder}
                    separator={separator}
                    startFrom={dateIsValid(new Date(startFrom)) ? new Date(startFrom) : null}
                    i18n={i18n}
                    disabled={disabled}
                    inputClassName={inputClassName}
                    containerClassName={containerClassName}
                    toggleClassName={toggleClassName}
                    displayFormat={displayFormat}
                    readOnly={readOnly}
                    minDate={dateIsValid(new Date(minDate)) ? new Date(minDate) : undefined}
                    maxDate={dateIsValid(new Date(maxDate)) ? new Date(maxDate) : undefined}
                    dateLooking={dateLooking}
                    disabledDates={disabledDates}
                    startWeekOn={startWeekOn as WeekStringType}
                    toggleIcon={isEmpty => {
                        return isEmpty ? "Select Date" : "Clear";
                    }}
                    popoverDirection={popoverDirection}
                    required={required}
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
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="required"
                                checked={required}
                                onChange={e => setRequired(e.target.checked)}
                            />
                            <label className="block" htmlFor="required">
                                Required
                            </label>
                        </div>
                    </div>
                    <div className="mb-2 w-1/2 sm:w-full">
                        <div className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 rounded"
                                id="appendToBody"
                                checked={appendToBody}
                                onChange={e => setAppendToBody(e.target.checked)}
                            />
                            <label className="block" htmlFor="appendToBody">
                                Append To Body
                            </label>
                        </div>
                    </div>

                    {appendToBody && (
                        <div className="text-center mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Open Calendar In Modal
                            </button>
                        </div>
                    )}
                </div>

                <div className="w-full sm:w-1/3 pr-2 flex flex-col">
                    <div className="mb-2">
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

                    <div className="mb-2">
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

                    <div className="mb-2">
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

                    <div className="mb-2">
                        <label className="block" htmlFor="startFrom">
                            Start From
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="startFrom"
                            type="date"
                            value={startFrom}
                            onChange={e => {
                                setStartFrom(e.target.value);
                            }}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block" htmlFor="minDate">
                            Minimum Date
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="minDate"
                            type="date"
                            max={maxDate}
                            value={minDate}
                            onChange={e => {
                                setMinDate(e.target.value);
                            }}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block" htmlFor="maxDate">
                            Maximum Date
                        </label>
                        <input
                            className="rounded border px-4 py-2 w-full border-gray-200"
                            id="maxDate"
                            type="date"
                            min={minDate}
                            value={maxDate}
                            onChange={e => {
                                setMaxDate(e.target.value);
                            }}
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block" htmlFor="dateLooking">
                            Date Looking
                        </label>
                        <select
                            className="rounded block w-full border-gray-200 border px-4 py-2"
                            id="dateLooking"
                            value={dateLooking}
                            onChange={e => {
                                setDateLooking(e.target.value as DateLookingType);
                            }}
                        >
                            {DATE_LOOKING_OPTIONS.map((option, i) => (
                                <option key={i} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="w-full sm:w-1/3 pr-2 flex flex-col">
                    <div className="mb-2">
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

                    <div className="mb-2">
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

                    <div className="mb-2">
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

                    <div className="mb-2">
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

                    <div className="mb-2">
                        <label className="block" htmlFor="containerClassName">
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

                    <div className="mb-2">
                        <label className="block" htmlFor="startWeekOnClassName">
                            Start Week On
                        </label>

                        <select
                            className="rounded block w-full border-gray-200 border px-4 py-2"
                            id="startWeekOnClassName"
                            value={startWeekOn}
                            onChange={e => {
                                setStartWeekOn(e.target.value as WeekStringType);
                            }}
                        >
                            {WEEK_DAY.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-2">
                        <label className="block" htmlFor="startWeekOnClassName">
                            Popover direction
                        </label>

                        <select
                            className="rounded block w-full border-gray-200 border px-4 py-2"
                            id="startWeekOnClassName"
                            value={popoverDirection}
                            onChange={e => {
                                setPopoverDirection(e.target.value as PopoverDirectionType);
                            }}
                        >
                            {POPOVER_DIRECTION.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="w-full sm:w-2/3 pr-2 flex flex-col ml-auto">
                    <hr className="my-3" />

                    <h1 className="mb-2 text-lg font-semibold text-center col-span-3">
                        Disable Dates
                    </h1>

                    <div className="grid grid-cols-2 gap-3 w-full">
                        <div className="mb-2 w-full">
                            <label className="block" htmlFor="startDate">
                                Start Date
                            </label>

                            <input
                                className="rounded border px-4 py-2 border-gray-200 sm:w-full w-full"
                                id="startDate"
                                type="date"
                                value={newDisabledDates.startDate}
                                max={newDisabledDates.endDate}
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

                        <div className="mb-2 w-full">
                            <label className="block" htmlFor="endDate">
                                End Date
                            </label>

                            <input
                                className="rounded border px-4 py-2 border-gray-200 sm:w-full w-full"
                                id="endDate"
                                type="date"
                                value={newDisabledDates.endDate}
                                min={newDisabledDates.startDate}
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
                    </div>

                    <div className="mb-2 col-span-3">
                        <button
                            onClick={() => {
                                if (
                                    newDisabledDates.startDate !== "" &&
                                    newDisabledDates.endDate !== ""
                                ) {
                                    setDisabledDates(prev => {
                                        return [
                                            ...prev,
                                            {
                                                startDate: new Date(newDisabledDates.startDate),
                                                endDate: new Date(newDisabledDates.endDate)
                                            }
                                        ];
                                    });
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
                                        setDisabledDates(disabledDates.filter(r => r !== range));
                                    }}
                                >
                                    Delete
                                </button>
                                <span className="pl-2">
                                    {range.startDate?.toLocaleDateString()} -{" "}
                                    {range.endDate?.toLocaleDateString()}
                                </span>
                            </div>
                        ))}
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
