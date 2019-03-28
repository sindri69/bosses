const ENDPOINT = 'http://localhost:4500/api/bossess';


const bossService = ()  => {

    return {
        getAllBosses: () => fetch(ENDPOINT).then(d => d.json()).then(d => d.main.temp)
    };

};

export default bossService;

