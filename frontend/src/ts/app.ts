import axios, {AxiosResponse} from 'axios';


axios.get("http://172.16.1.194:9944/info/23.6").then((res: AxiosResponse) => {
    console.log(res.data);
});

console.log("Hello");

