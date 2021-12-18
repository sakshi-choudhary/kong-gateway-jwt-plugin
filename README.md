# Kong Gateway JWT Plugin

The Kong Gateway JWT plugin is an API gateway authentication strategy. The plugin serves as the JWT authorizer. It authenticates the JWT in the HTTP request by verifying that token’s claims and ensuring a trusted party signed it. Then, depending on whether these steps were successful, Kong Gateway routes the upstream service request.

## 🔧 Configuration

- Create a `kong.conf.default` file in the root dir

- Paste these lines inside the file
(This is because its DB-less mode)

    ```
    database = off
    declarative_config = /path/to/kong.yml
    ```
- Run this cmd in the terminal 
   
    ```
    sudo cp kong.conf.default /etc/kong/kong.conf
    ```

- Set your **username** and **secret code** in `kong.yml` file.

## 💻 Run the Kong Server

```
sudo kong start
```

To restart

```
sudo kong restart
```

## 📺 Working Previews

<img width="500" alt="Screenshot 2021-12-18 at 10 20 46 PM" src="https://user-images.githubusercontent.com/66865329/146650693-2d09b01d-35d0-4fee-8d1f-4c3065fa5681.png">
<img width="500" alt="Screenshot 2021-12-18 at 10 20 54 PM" src="https://user-images.githubusercontent.com/66865329/146650716-5e3d861e-5ede-4da9-85b5-0464293de72f.png">



`GET` request to the admin API’s endpoint /consumers/CONSUMER-USERNAME/jwt. 
This gives info about this consumer’s JWT credential:

<img width="500" alt="Screenshot 2021-12-18 at 10 21 56 PM" src="https://user-images.githubusercontent.com/66865329/146650740-efab470b-6e53-442c-8806-7b148d1951a7.png">

Using these values and generated jwt

<img width="500" alt="Screenshot 2021-12-18 at 10 25 48 PM" src="https://user-images.githubusercontent.com/66865329/146650832-f67a3055-0d08-4c30-af8f-9715c62f047e.png">


Using this generate jwt in `bearer token`, jwt validated


<img width="500" alt="Screenshot 2021-12-18 at 10 26 13 PM" src="https://user-images.githubusercontent.com/66865329/146650911-8d80c036-99aa-42d0-a1e2-ed2c2ed6a596.png">

Additional values to upstream headers in the console


<img width="500" alt="Screenshot 2021-12-18 at 10 31 06 PM" src="https://user-images.githubusercontent.com/66865329/146651097-ae2b9f41-035e-4f43-82c6-d4439efabff3.png">





<blockquote align="center"> 
  rendered with <span style="color: #8b0000;">&hearts;</span> by <a href="https://sakshichoudhary.tech">Sakshi Choudhary</a>.

</blockquote> 
