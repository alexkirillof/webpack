
const resultParagraf = document.getElementById('output')
function printResult({years,months,days}){
    resultParagraf.innerHTML = `
    Years:${years},
    Months:${months},
    Days:${days}
    `

}

function printError(errorText){
    resultParagraf.innerHTML = `
    <span style="color:red">
    ${errorText}
    </span>
    `
}

export {printResult,printError}