#!/bin/sh
USER1=$(env | grep -i "USER_DB=" | sed 's/USER_DB=//g')
PASSWORD1=$(env | grep "PASSWORD_DB=" | sed 's/PASSWORD_DB=//g')
if [ -z "$USER1" ] || [ -z "$PASSWORD1" ]; then
  echo "****************************************************"
  echo "** Não foi possível carregar o container          **"
  echo "** Usuário ou senha BD não localizado arq .env    **"
  echo "** Usuário: $USER1                                **"
  echo "** Senha: $PASSWORD1                              **"
  echo "****************************************************" 
  exit 1
else
  echo "Usuário BD: $USER1"
  echo "Senha BD: $PASSWORD1" 
  nodemon -L --watch . app.js
fi
