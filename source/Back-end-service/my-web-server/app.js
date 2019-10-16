const mysql = require('mysql');

const express = require('express');

const app = express();

const bodyparser = require('body-parser');

var cors = require('cors');

app.use(cors())

app.use(bodyparser.json());


var mysqlCNN = mysql.createConnection({
    host : 'sql12.freemysqlhosting.net',
    user: 'sql12308160',
    password: 'EFfaCMnnS6',
    database: 'sql12308160',
    multipleStatements: true
});

mysqlCNN.connect((err) =>{
    if(!err)
        console.log("cnn db server");
    else
        console.log("error!: " + JSON.stringify(err, undefined,2))
})

app.listen(process.env.PORT||4000);

app.get("/", (req,res)=>{
    res.send("đây là trang chủ")
})

app.get('/users', (req,res)=>{
    mysqlCNN.query("SELECT * FROM manuser", (err,rows,fields)=>{
        if(!err)
        {
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
})


app.get('/users/:idusers', (req,res) =>{
    mysqlCNN.query(`SELECT * FROM manuser WHERE id = ${req.params.idusers}`, (err,rows,fields)=>{
        if(!err)
        {
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
})


app.delete('/users/:idusers', (req,res) =>{
    mysqlCNN.query(`DELETE FROM manuser WHERE id = ${req.params.idusers}`, (err,rows,fields)=>{
        if(!err)
        {
            res.send("Delete succesfully");
        }
        else{
            console.log(err);
        }
    })
})


app.post('/users', (req,res)=>{
    let emp = req.body;
    var sql = `SET @id = '${emp.id}';SET @name = '${emp.name}';SET @account = '${emp.account}';SET @password = '${emp.password}';\
    SET @avatar = '${emp.avatar}';SET @numofbank = '${emp.numofbank}';SET @email = '${emp.email}';SET @phone = '${emp.phone}';\
    CALL user_insert_edit(@id,@name,@account,@password,@avatar,@numofbank,@email,@phone);`;
    mysqlCNN.query(sql, (err,rows,fields)=>{
        if(!err)
        {
            res.send("insert successfully");
        }
        else{
            console.log(err);
        }
    })
})

app.put('/users', async (req,res)=>{
    var emp = req.body;
    try{
        mysqlCNN.query(`SELECT * FROM manuser WHERE id = ${emp.id}`, (err,rows,fields)=>{
            if(!err)
            {
                console.log(rows[0].name)
                var name = emp.name? emp.name: rows[0].name;
                var account = emp.account? emp.account: rows[0].account;
                var password = emp.password? emp.password: rows[0].password;
                var avatar = emp.avatar? emp.avatar: rows[0].avatar;
                var numofbank = emp.numofbank? emp.numofbank: rows[0].numofbank;
                var email = emp.email? emp.email: rows[0].email;
                var phone = emp.phone? emp.phone: rows[0].phone;

                var sql = `SET @id = '${emp.id}';SET @name = '${name}';SET @account = '${account}';SET @password = '${password}';\
                SET @avatar = '${avatar}';SET @numofbank = '${numofbank}';SET @email = '${email}';SET @phone = '${phone}';\
                CALL user_insert_edit(@id,@name,@account,@password,@avatar,@numofbank,@email,@phone);`;
                mysqlCNN.query(sql, (err,rows,fields)=>{
                    if(!err)
                    {
                        res.send('Updated successfully');
                    }
                    else{
                        console.log(err);
                    }       
    })
            }
            else
            {
                console.log(err);
            }
        })

    }
    catch(err){
        console.log(err)
    }
    
})


app.patch('/users', (req,res)=>{
    var emp = req.body;
    try{
        mysqlCNN.query(`SELECT * FROM manuser WHERE id = ${emp.id}`, (err,rows,fields)=>{
            if(!err)
            {
                console.log(rows[0].name)
                var name = emp.name? emp.name: rows[0].name;
                var account = emp.account? emp.account: rows[0].account;
                var password = emp.password? emp.password: rows[0].password;
                var avatar = emp.avatar? emp.avatar: rows[0].avatar;
                var numofbank = emp.numofbank? emp.numofbank: rows[0].numofbank;
                var email = emp.email? emp.email: rows[0].email;
                var phone = emp.phone? emp.phone: rows[0].phone;

                var sql = `SET @id = '${emp.id}';SET @name = '${name}';SET @account = '${account}';SET @password = '${password}';\
                SET @avatar = '${avatar}';SET @numofbank = '${numofbank}';SET @email = '${email}';SET @phone = '${phone}';\
                CALL user_insert_edit(@id,@name,@account,@password,@avatar,@numofbank,@email,@phone);`;
                mysqlCNN.query(sql, (err,rows,fields)=>{
                    if(!err)
                    {
                        res.send('Updated successfully');
                    }
                    else{
                        console.log(err);
                    }       
                })
            }
            else
            {
                console.log(err);
            }
        })

    }
    catch(err){
        console.log(err)
    }
    
})

s4 = ()=>{
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

randomkey = ()=>
  {
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
  }

app.post('/key',(req,res)=>{
    var emp = req.body;
    if(emp.method === 'get-key')
    {
        var key = randomkey();
        key = key + emp.start + emp.user;
        var sql = `SET @id = '${emp.id}';SET @value = '${key}';SET @type = '${emp.type}';SET @user = '${emp.user}';SET @start = '${emp.start}';\
        CALL key_insert_edit(@id,@value,@type,@user,@start);`;
        mysqlCNN.query(sql, (err,rows,fields)=>{
            if(!err)
            {
                res.send(key);
            }
            else{
                console.log(err);
            }
        })
    }
})