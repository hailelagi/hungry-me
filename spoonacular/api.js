import dotenv from "dotenv";
import { ApiClient, DefaultApi} from 'spoonacular_api';

dotenv.config();

let defaultClient = ApiClient.instance;
let apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = process.env.API_KEY;

export default new DefaultApi();
