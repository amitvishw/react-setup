let clickCount = 0
export const onClickAction = text => ({
    type: 'CLICK',
    clickCount: clickCount++,
    text
})
//this is what reducer reveives in action param