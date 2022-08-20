import $ from 'jquery';

import datepickerFactory from 'jquery-datepicker';

export default function addDateFunction(){
    addDatePicker();
    submitDateForm()
}

export function addDatePicker() {
    datepickerFactory($);
    $('.date_picker').each(function (i, picketField) {
       console.log($(picketField).attr('date_format'))
       $(picketField).datepicker({
         dateFormat: $(picketField).attr('date_format')
       })
   });
}

export function submitDateForm() {
    document.getElementById("datepicker_form").addEventListener("submit", function (e) {
         e.preventDefault();
        var formElem = document.getElementById("datepicker_form");
        const myFormData = new FormData(formElem);
        for (var keyValue of myFormData) {
            console.log(keyValue[0] + ': ', keyValue[1]);
        }
    });
}
