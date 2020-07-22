console.log('This works');
const container = document.querySelector('.container');
console.log(container);

fetch('https://api.spacexdata.com/v3/capsules') // return response
.then(response => {
    // console.log(response);
    return response.json(); // data
})
.then(data => {
    // console.log(data);
    // const firstElement = data[0];
    // console.log(firstElement);
    // let capsuleID = firstElement.capsule_id;
    // console.log(capsuleID);
    // let details = firstElement.details;
    // console.log(details);
    // let landings = firstElement.landings;
    // console.log(landings);

    for (let i = 0; i < data.length; i++) {
        let eachCapsule = data[i];
        // console.log(eachCapsule);
        const obj = {
            capsuleID: eachCapsule.capsule_id, // dragon1
            details: eachCapsule.details, // some sentence ....
            landings: eachCapsule.landings // 1
        };
        console.log(obj);

        const capsuleElement = document.createElement('p');
        capsuleElement.textContent = obj.capsuleID;

        container.appendChild(capsuleElement);
    }
});