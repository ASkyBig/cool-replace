#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');
const download = require('download-git-repo');
const handlebars = require('handlebars');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');
const replace = require('replace-in-file');
const path = require('path');

const getAllFileName = (rootName, arr = []) => {
  const fileNameArr = fs.readdirSync(rootName);
  fileNameArr.forEach(fileName => {
    const fullPath = path.join(rootName, fileName);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFileName(fullPath, arr)
    } else {
      arr.push(fullPath);
    }
  })
  return arr;
}

program
  .command('remove-script-with-word <keyword> [path]')
  .action((keyword, path = 'src') => {
    if (fs.existsSync(path)) {
      const arr = getAllFileName(path);
      const regex = new RegExp('<script>[\\s\\S]*?<\\/script>[\\n\\r]*', 'g');
      const options = {
        files: arr,
        //Replacement to make (string or regex) 
        from: regex,
        to: item => {
          if (item.includes(keyword)) return '';
          return item;
        },
      };
      replace(options).then(changedFiles => {
        console.log(symbols.error, chalk.green('改变的文件有:', changedFiles));
      })
    } else {
      console.log(symbols.error, chalk.red('路径不存在，请检查 :('));
    }
  })

program.parse(process.argv);