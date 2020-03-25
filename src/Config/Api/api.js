module.exports = {
    userLogin(params) {

        console.log("params", params)
        let data = {
            "username": "dev",
            "password": "dev"
        }
        // if (Platform.OS == 'ios')
        //     deviceType = "iOS"
        // else
        //     deviceType = "Android"
        return fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'device_type': deviceType
                //'Authorization': 'Basic '+btoa('MyTownTVAdmin:@6e6HtN5'), 
            },

            body: JSON.stringify(data)

        })
            .then((response) => { setTimeout(() => null, 0); return response.json() })

    },

}