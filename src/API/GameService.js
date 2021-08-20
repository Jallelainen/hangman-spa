import axios from 'axios';

class GameService {
    async getWord(setWordObj){
        return await axios
            .get("https://random-words-api.vercel.app/word")
            .then((response) => {
                console.log(response.data);
                setWordObj(response.data[0]);
            })
            .catch((error) => {console.log(error)});
    }
}

export default new GameService();