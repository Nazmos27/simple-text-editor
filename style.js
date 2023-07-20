
function stylingByBtn(elemntId){
    const text = document.getElementById('text-area')
    if(elemntId === 'bold-btn'){
        text.style.fontWeight = '700'
        text.style.fontStyle = 'normal'
        return text.innerText
    }else if(elemntId === 'italic-btn'){
        text.style.fontStyle = 'italic'
        text.style.fontWeight = '400'
        return text.innerText
    }
    else{
        text.style.fontStyle = 'normal'
        text.style.fontWeight = '400'
        return text.innerText
    }
    // const newText = text.style.style = '700'
    // text.innerText = newText
}
document.getElementById('italic-btn').addEventListener('click',function(){
    stylingByBtn('italic-btn')
})
document.getElementById('bold-btn').addEventListener('click',function(){
    stylingByBtn('bold-btn')
})
document.getElementById('normal-btn').addEventListener('click',function(){
    stylingByBtn('normal-btn')
})
document.getElementById('color-value').addEventListener('mouseleave',function(){
    const presentText = document.getElementById('text-area')
    const colorValue = document.getElementById('color-value').value
    presentText.style.color = colorValue


})


function setAlignment(alignmentType){
    const defaultText = document.getElementById('text-area')
    if(alignmentType === 'left-align'){
        defaultText.style.textAlign = 'left'
        return defaultText.innerText
    }else if(alignmentType === 'center-align'){
        defaultText.style.textAlign = 'center'
        return defaultText.innerText
    }else{
        defaultText.style.textAlign = 'right'
        return defaultText.innerText
    }
}

document.getElementById('left-align').addEventListener('click',function(){
    setAlignment('left-align')
})
document.getElementById('center-align').addEventListener('click',function(){
    setAlignment('center-align')
})
document.getElementById('right-align').addEventListener('click',function(){
    setAlignment('right-align')
})

