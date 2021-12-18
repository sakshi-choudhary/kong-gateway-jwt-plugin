# Kong Gateway JWT Plugin

The Kong Gateway JWT plugin is one strategy for API gateway authentication. The plugin serves as the JWT authorizer. It authenticates the JWT in the HTTP request by verifying that token’s claims and ensuring a trusted party signed it. Then, depending on whether these steps were successful, Kong Gateway routes the upstream service request.

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



<blockquote align="center"> 
  rendered with <span style="color: #8b0000;">&hearts;</span> by <a href="https://sakshichoudhary.tech">Sakshi Choudhary</a>.

</blockquote> 