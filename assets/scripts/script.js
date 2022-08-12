// @ts-nocheck
let airportname, airporttag

const init = () => {
    airportname = prompt('enter the airport name')
    airporttag = prompt('enter the airport tag')
    document.querySelector('#airport-name').innerHTML = `${airportname} <span id="airport-tag">(${airporttag})</span>`;
}

// init()

function gatherData() {
    const data = {
        airline: document.querySelector('#airline').value,
        plane: document.querySelector('#plane').value,
        number: document.querySelector('#number').value,
        takeoff: {
            location: document.querySelector('#takeoff').value,
            time: document.querySelector('#takeoff-time').value,
            date: document.querySelector('#takeoff-date').value
        },
        landing: {
            location: document.querySelector('#landing').value,
            time: document.querySelector('#landing-time').value,
            date: document.querySelector('#landing-date').value
        }
    }

    return data;
}

document.querySelector('#submit').onclick = function () {
    console.log(gatherData())
}