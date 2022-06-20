let url = "https://fdo.rocketlaunch.live/json/launches/next/5";

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response)
        response.result.forEach(element => {
            console.log(element.launch_description)
                var div = document.createElement('div');
                div.innerHTML = `<p>${element.provider.name}</p>
                                <p>${element.date_str}</p>
                                <p>${element.vehicle.name}</p>
                                <p>${element.name}</p>
                                <p>${element.pad.name}, ${element.pad.location.name}, ${element.pad.location.state}, ${element.pad.location.country}</p>
                                <p style="font-size: 60%; margin-top: .5rem;">${element.launch_description}</p>`;
                div.className = 'launch';
                document.body.appendChild(div);
        });
    })