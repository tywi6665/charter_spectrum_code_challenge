export default {
    fetchRestaurants: async () => {
        const res = await fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
            method: 'GET',
            headers: {
                Authorization: "Api-Key q3MNxtfep8Gt",
            }
        });
        return await res.json();
    }
};