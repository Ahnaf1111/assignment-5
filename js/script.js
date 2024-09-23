// noakhali donate section

document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
    const inpAmount = getElementWithValue('noakhali-inp')
    const totalDonation = getElementWithInnerText('noakhali-donation-amount')
    const balance = getElementWithInnerText('balance')
    const updateBalance = balance - inpAmount;
    const updateAmount = totalDonation+inpAmount;
    if(updateBalance<0){
        return alert('insufficient Balance')
    }
    if(isNaN(inpAmount)||inpAmount<0){
        return alert('Invalid Input')
    }
    document.getElementById('noakhali-donation-amount').innerText=updateAmount;
    document.getElementById('balance').innerText=updateBalance;
})
// feni Donate Section
document.getElementById('feni-donate-btn').addEventListener('click',function(){
    const inpAmount = getElementWithValue('feni-inp')
    const totalDonation = getElementWithInnerText('feni-donation-amount')
    const balance = getElementWithInnerText('balance')
    const updateBalance = balance - inpAmount;
    const updateAmount = totalDonation+inpAmount;
    if(updateBalance<0){
        return alert('insufficient Balance')
    }
    if(isNaN(inpAmount)||inpAmount<0){
        return alert('Invalid Input')
    }
    document.getElementById('feni-donation-amount').innerText=updateAmount;
    document.getElementById('balance').innerText=updateBalance;
})
// quota movement Section
document.getElementById('quota-donate-btn').addEventListener('click',function(){
    const inpAmount = getElementWithValue('quota-inp')
    const totalDonation = getElementWithInnerText('quota-donation-amount')
    const balance = getElementWithInnerText('balance')
    const updateBalance = balance - inpAmount;
    const updateAmount = totalDonation+inpAmount;
    if(updateBalance<0){
        return alert('insufficient Balance')
    }
    if(isNaN(inpAmount)||inpAmount<0){
        return alert('Invalid Input')
    }
    document.getElementById('quota-donation-amount').innerText=updateAmount;
    document.getElementById('balance').innerText=updateBalance;
})