import {history} from "../managers/history";
import swal from "sweetalert";
import React from "react";
import {genericConstants} from "../constants";
import customToast from "../common/components/ToastComponent";
import moment from "moment";

const utility = {
    parseResponse,
    descSortOnCriteria,
    ascSortOnCriteria,
    epochToCalender,
    apiFailureToast,
    apiSuccessToast,
    generateGUID,
    basicAlert,
    getActivityDateEpochRange,
    decodeBase64,
    validationAlert,
    isNumber,
    navigateToPath,
    toggleDropDown,
    validateName,
    validateEmail,
    isEmpty,
    isEmptyArray,
    isMenuActive,
    isPasswordValid,
    consoleLogger,
    generateSortAddressString,
    showUnderDevelopment,
    epochToDate,
    getTimeFromNow,
    epocToPrettyTime,
    getTimeDifference,
    getTimestampFromDate,
    secondsToTime,
    sortArrayForKey,
    getNewFileName,
    getNewFileNameWithId,
    decodeBase64Key,
    romanize,
    extractNumericValueFromString,
    isPositiveNumberInput,
    getDateString,
    getDateStringWithSubtractionOfMonth
};
export default utility;


function getDateString(timestamp, format = 'MM-DD-YYYY') {
    return moment(timestamp).format(format) || ""
}

function getDateStringWithSubtractionOfMonth(timestamp, noOfMonthToSubtract, format = 'MM-DD-YYYY') {
    return moment(timestamp).subtract(noOfMonthToSubtract, 'months').format(format) || ""
}

/**
 * Replaces every character except numeric characters from the string
 * @param answerObject
 * @returns {*}
 */
function extractNumericValueFromString(answerObject) {
    let value = answerObject.value;
    return value && value.replace(/[^0-9\.]+/g, '');
}

function isPositiveNumberInput(value) {
    // value = value && value.replace(/[^0-9\.]+/g, '');
    let positiveIntRegEx = /^(?:[1-9]\d*|0)?(?:\.\d+)?$/;
    // consoleLogger("Test result", value+" :  "+(positiveIntRegEx).test(value));
    return (positiveIntRegEx).test(value)
}

function romanize(num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function decodeBase64Key(name) {
    if (!name || !name.length)
        return "";

    return new Buffer(name, 'base64').toString('ascii');
};

function getNewFileName(baseName, extension) {
    let fileName = `${baseName}_${(new Date).getTime()}${extension}`;
    return fileName.replace(/ /g, "_");
};

function getNewFileNameWithId(baseName, extension, id) {
    let fileName = `${baseName}_${id}${extension}`;
    return fileName.replace(/ /g, "_");
};


function consoleLogger(title, data) {
    console.log("DEV_LOGS == " + title + "  :  ", data);
}

function generateSortAddressString(addressData) {
    let address = "";
    if (!addressData)
        return address;
    if (addressData.city)
        address = address + addressData.city + " ";
    if (addressData.state)
        address = address + addressData.state + " ";
    return address;
}

function descSortOnCriteria(data, criteria) {
    data.sort((a, b) => {
        return b[criteria] - a[criteria];
    });
}

function ascSortOnCriteria(data, criteria) {
    data.sort((a, b) => {
        return a[criteria] - b[criteria];
    });
}

/**
 *              This function is made to handle success and error callback!
 * @param promise
 * @returns {Promise<Promise|Bluebird<*[] | R>|Bluebird<any | R>|*|Promise<T | *[]>>}
 */
function parseResponse(promise) {
    return promise.then(data => {
        return [null, data];
    }).catch(err => [err]);
};

export const dispatchAction = (type, data) => {
    return dispatch => dispatch({type, data});
};

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//TODO: update apiConstant.API_FAILURE
function apiFailureToast(message) {
    customToast(false, message ? message : "Failure!")
    // toast.error(message ? message : "apiConstant.API_FAILURE");
}

function apiSuccessToast(message) {
    customToast(true, message ? message : "Success!")

    // toast.success(message ? message : "apiConstant.API_SUCCESS");
}

function generateGUID() {
    var nav = window.navigator;
    var screen = window.screen;
    var guid = nav.mimeTypes.length;
    guid += nav.userAgent.replace(/\D+/g, '');
    guid += nav.plugins.length;
    guid += screen.height || '';
    guid += screen.width || '';
    guid += screen.pixelDepth || '';
    return guid;
}

function basicAlert(message) {
    swal({
        title: message,
        icon: '/images/activation_pending.svg',
    })
}

function validationAlert(message, type = 'info') {
    swal({
        title: message,
        icon: type
    })
}

function getTimeDifference(timeStampTo) {
    let minFive = 300000;
    let oneDay = 86400000;
    let difference = "";
    let am = " AM";
    let pm = " PM";
    let hh = epochToDate(timeStampTo, 'hh');
    let mm = epochToDate(timeStampTo, 'mm');
    let dateFormat = epochToDate(timeStampTo, 'DD MMM YYYY');
    let hours = new Date(timeStampTo).getHours();
    let timeDifference = new Date().getTime() - timeStampTo;
    if (timeDifference < oneDay) {
        if (timeDifference < minFive) {
            difference = "Just Now";
        } else {
            if (hours < 12)
                difference = "Today at " + hh + ":" + mm + am;
            else
                difference = "Today at " + hh + ":" + mm + pm;
        }
    } else {
        if (hours < 12)
            difference = dateFormat + ", " + hh + ':' + mm + am;
        else
            difference = dateFormat + ", " + hh + ':' + mm + pm;
    }
    return difference;
}

function epochToDate(timeStamp, timeFormat) {
    timeStamp = Math.floor(timeStamp);  //to convert to integer if seconds is String.
    let dateObject = new Date(timeStamp);
    return moment(dateObject).format(timeFormat)//DD MMM YYYY
}

function epochToCalender(timeStamp, timeFormat) {
    return moment().calendar(timeStamp, timeFormat); // Today at 4:58 PM
}

function getEpochFromTimeString(timeString, format) {
    return moment(timeString, format).valueOf();
}

function getTimeFromNow(timeStamp) {
    return moment(timeStamp, "YYYYMMDD").fromNow();
}

function getActivityDateEpochRange(activityDate) {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    let startDayEpochOfCurrentWeek = moment().startOf('isoweek').unix() * 1000;
    let startDayEpochOfCurrentMonth = moment().startOf('month').unix() * 1000;
    let startDayEpochOfCurrentQuarter = moment().startOf('quarter').unix() * 1000;
    let startDayEpochOfCurrentYear = moment().startOf('year').unix() * 1000;
    let endDayEpochOfCurrentWeek = moment().endOf('isoweek').unix() * 1000;
    let endDayEpochOfCurrentMonth = moment().endOf('month').unix() * 1000;
    let endDayEpochOfCurrentQuarter = moment().endOf('quarter').unix() * 1000;
    let endDayEpochOfCurrentYear = moment().endOf('year').unix() * 1000;
    let day, start;
    switch (activityDate) {
        case "Today":
            return {start: currentDate.getTime(), end: new Date().getTime()};
        case "Yesterday":
            day = new Date(currentDate);
            day.setDate(currentDate.getDate() - 1);
            return {start: day.getTime(), end: currentDate.getTime()};
        case "Last seven days":
            day = new Date(currentDate);
            day.setDate(currentDate.getDate() - 7);
            return {start: day.getTime(), end: currentDate.getTime()};
        case "Last fourteen days":
            day = new Date(currentDate);
            day.setDate(currentDate.getDate() - 14);
            return {start: day.getTime(), end: currentDate.getTime()};
        case "Last twenty one days":
            day = new Date(currentDate);
            day.setDate(currentDate.getDate() - 21);
            return {start: day.getTime(), end: currentDate.getTime()};
        case "Last Week":
            start = new Date(startDayEpochOfCurrentWeek);
            start.setDate(start.getDate() - 7);
            return {start: start.getTime(), end: startDayEpochOfCurrentWeek};
        case "Last two weeks":
            start = new Date(startDayEpochOfCurrentWeek);
            start.setDate(start.getDate() - 14);
            return {start: start.getTime(), end: startDayEpochOfCurrentWeek};
        case "Last three weeks":
            start = new Date(startDayEpochOfCurrentWeek);
            start.setDate(start.getDate() - 21);
            return {start: start.getTime(), end: startDayEpochOfCurrentWeek};
        case "Last Month":
            start = new Date(startDayEpochOfCurrentMonth);
            start.setMonth(start.getMonth() - 1);
            return {start: start.getTime(), end: startDayEpochOfCurrentMonth};
        case "Last Quarter":
            start = new Date(startDayEpochOfCurrentQuarter);
            start.setMonth(start.getMonth() - 3);
            return {start: start.getTime(), end: startDayEpochOfCurrentQuarter};
        case "Last Year":
            start = new Date(startDayEpochOfCurrentYear);
            start.setFullYear(start.getFullYear() - 1);
            return {start: start.getTime(), end: startDayEpochOfCurrentYear};
        case "This Week":
            return {start: startDayEpochOfCurrentWeek, end: endDayEpochOfCurrentWeek};
        case "This Quarter":
            return {start: startDayEpochOfCurrentQuarter, end: endDayEpochOfCurrentQuarter};
        case "This Year":
            return {start: startDayEpochOfCurrentYear, end: endDayEpochOfCurrentYear};
        case "Current Month":
            return {start: startDayEpochOfCurrentMonth, end: endDayEpochOfCurrentMonth};
        default:
            return {start: currentDate.getTime(), end: new Date().getTime()};
    }

}

function decodeBase64(s) {
    let e = {}, i, b = 0, c, x, l = 0, a, r = '', w = String.fromCharCode, L = s.length;
    let A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0; i < 64; i++) {
        e[A.charAt(i)] = i;
    }
    for (x = 0; x < L; x++) {
        c = e[s.charAt(x)];
        b = (b << 6) + c;
        l += 6;
        while (l >= 8) {
            ((a = (b >>> (l -= 8)) & 0xff) || (x < (L - 2))) && (r += w(a));
        }
    }
    return r;
}

function navigateToPath(path) {
    history.push(path)
}

function toggleDropDown(dropdownID) {
    // $("#" + dropdownID).toggle("show");
}

function validateName(name) {
    let reg = /[A-Z][a-zA-Z]*/;
    return reg.test(name)
}

function validateEmail(email) {
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

function isPasswordValid(password) {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return reg.test(password);
}

function isEmpty(string) {
    return !string || string.trim().length === 0;
}

function isEmptyArray(array) {
    return !array || array.length === 0;
}

function isMenuActive(path) {
    return window.location.pathname.includes(path);
}

function showUnderDevelopment() {
    basicAlert("Under Development")
}

function epocToPrettyTime(seconds) {
    seconds = Math.floor(seconds);//to convert to integer if seconds is String.
    var nowTimeMilliseconds = (new Date).getTime();
    var date = new Date(seconds);
    var dateObject = moment(date).format('DD MMM YY');
    //var dateObject = moment(date).format('ddd, MMM DD hh:mm A');
    seconds = Math.floor((nowTimeMilliseconds / 1000) - (seconds / 1000));
    var interval = Math.floor(seconds / 172800);
    if (interval >= 1)
        return dateObject;
    //if (interval >= 1) return dateObject+" "+moment.tz(moment.tz.guess()).format('z');
    interval = Math.floor(seconds / 86400);
    if (interval >= 1)
        return "Yesterday";

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        if (interval === 1)
            return interval + " hr ago";
        return interval + " hrs ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        if (interval === 1)
            return interval + " min ago";
        return interval + " min ago";
    } else
        return "Just now";
}

function secondsToTime(milliseconds) {
    let date = new Date(milliseconds)
    var duration = moment.duration(milliseconds, 'milliseconds');
    return (duration.hours() + ":" + duration.minutes() + ":" + duration.seconds())
    let dateObject = moment(date, 'hh:mm:ss').fromNow();
    return dateObject

    // let hours = Math.floor(secs / (60 * 60));
    //
    // let divisor_for_minutes = secs % (60 * 60);
    // let minutes = Math.floor(divisor_for_minutes / 60);
    //
    // let divisor_for_seconds = divisor_for_minutes % 60;
    // let seconds = Math.ceil(divisor_for_seconds);
    //
    // let obj = {
    //     "h": hours,
    //     "m": minutes,
    //     "s": seconds
    // };
    // return obj;
}

function getTimestampFromDate(year, month, date = 0) {
    let days = new Date(year, month, date).getDate();
    return new Date(year + "/" + month + "/" + days).getTime();

}

function getDateFromTimestamp(timestamp) {
    let d = new Date(timestamp);
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
}

function sortArrayForKey(array, key, order = genericConstants.SORTING_ORDER.ASCENDING) {
    if (!array || !Array.isArray(array))
        return;
    switch (order) {
        case genericConstants.SORTING_ORDER.ASCENDING:
            array.sort((a, b) => (Object.byString(a, key) > Object.byString(b, key)) ? 1 : ((Object.byString(b, key) > Object.byString(a, key)) ? -1 : 0));
            break;
        case genericConstants.SORTING_ORDER.DESCENDING:
            array.sort((b, a) => (Object.byString(a, key) > Object.byString(b, key)) ? 1 : ((Object.byString(b, key) > Object.byString(a, key)) ? -1 : 0));
            break;
    }
}

Object.byString = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (typeof o === 'object' && k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
};
