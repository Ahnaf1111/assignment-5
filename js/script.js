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

    const div= document.createElement('div')
    div.innerHTML=`
        <h4>${inpAmount} tk is donated for Noakhali flood situation in Bangladesh</h4>
        <p>${new Date().toLocaleString()}</p>
    `
            //  neeeddddddddddddd tooooooooo continueeeeeeeeeeeeee
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

// history and donation btn clicking
document.getElementById('history-btn').addEventListener('click',function(){
    this.className=`bg-lightGreen btn`
    const donationBtn= document.getElementById('donation-btn')
    donationBtn.classList.remove('bg-lightGreen')
    donationBtn.className=`bg-white border-2 border-gray-400 text-gray-500 btn`
    const hideDonate= document.getElementById('show-donate');
    hideDonate.classList.add('hidden')
})
document.getElementById('donation-btn').addEventListener('click',function(){
    this.className=`bg-lightGreen btn`
    const donationBtn= document.getElementById('history-btn')
    donationBtn.classList.remove('bg-lightGreen')
    donationBtn.className=`bg-white border-2 border-gray-400 text-gray-500 btn`
    const hideDonate= document.getElementById('show-donate');
    hideDonate.classList.remove('hidden')
})
