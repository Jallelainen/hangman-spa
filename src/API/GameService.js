import axios from 'axios';

class GameService {
    async getWord(){
        return await axios
            .get("https://random-words-api.vercel.app/word")
            .then((response) => {
                console.log(response);
                return response.data;
            })
            .catch((error) => {console.log(error)});
    }
}

export default new GameService();