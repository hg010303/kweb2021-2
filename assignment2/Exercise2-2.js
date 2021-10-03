const fs = require('fs');
const path = require('path');

var test_path = "./test";

function find_directory(current_path){
    fs.readdir(current_path,(err,files)=>{
        if(err){
            console.log(err);
            return;
        }

        files.forEach(file=>{
            var next_path = path.join(current_path,file);
            

            fs.stat(next_path,(err,stats)=>{
                if(stats.isDirectory()){
                    find_directory(next_path);
                }
                else{
                    if(path.extname(next_path)=='.js')
                        console.log(next_path);
                }
            })
        });
    })
}

find_directory(test_path);

