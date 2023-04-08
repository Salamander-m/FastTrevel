# FastTrevel
Легкий сайтик без БД на Node.js + Expressjs
-
Для начала работы и деплое проекта необходимо сделать следующее:
1. Установить docker **если вы этого ещё не сделали**
-- Для этого необходимо запустить импортировать репозиторий
```sh
mkdir /home/myProject; cd /home/myProject # здесь будет ваш проект
git clone https://github.com/Salamander-m/FastTrevel --branch master # команда импорта
cd myProject # переходим в папку
bash finished/start iam # запуск и сборка вашего файла, где <iam> имя вашего проекта *можете не менять*
```
2. Далее вы можете увидеть ваш образ в запуске после команды
```sh
docker ps
```
![image](https://user-images.githubusercontent.com/74792658/230726023-533752ca-2660-42a2-aba6-1756ceb6067d.png)
> *имя вначале и id могут отличаться*
3. Далее необходимо открыть настройки виртуальной машины и перебросить порты на наш хост
![image](https://user-images.githubusercontent.com/74792658/230726263-3b73ca5a-a39c-4b61-a11e-580e0b418eb5.png)

