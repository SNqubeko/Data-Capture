
//client side

async function getData(){

    const response = await fetch('/api');
    const data = await response.json();


    for (item of data){

        console.log(item)
        const root = document.createElement('div');
        const name = document.createElement('div');
        const email = document.createElement('div');
        const time = document.createElement('div');


        name.textContent = `Name: ${item.name}`
        email.textContent =`Email address: ${item.emailAddress}`
        time.textContent = `Time stored at: ${item.timeStamp}`

        root.append(name,email,time)
        document.body.append(root)
    }
}

getData();