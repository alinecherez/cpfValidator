# Validador de CPF v.1.0.1
Esta biblioteca se destina à verificação da sequência de números de um CPF (Cadastro de Pessoa Física) para uso em aplicações web.
Na versão atual, é capaz de validar os números de um CPF, evitando erros de digitação.

## Como instalar:

```shell

$  npm install cpfvalidator-acmc

```

## Como utilizar:

```node

> const isValid = require('cpfvalidator-acmc');
> isValid.cpfValidator('86843572057')
> // returns "true"

```

##versão 1.0.0 (released)
* funcionalidade: validação da sequência de números de um cartão de crédito.