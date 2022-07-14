# História principal

- O aplicativo será designado para produtores rurais
- O usuário poderá controlar suas produções pela página principal do seu perfil
- Ele pode também procurar outros produtores locais que estejam usando a plataforma
- Para controlar sua produção, ele fará o cadastro da produção que ficará com o status pendente até ser avaliada.

## Caso de uso: RegisterAccountWithBasicInformation

### Dados

- Nome completo do usuário
- Data de Nascimento
- Endereço
- CPF
- RG

### Fluxo normal

O usuário poderá partir para outro caso de uso que será definido futuramente para
o cadastro de plantio.

### Fluxo de exceção

1 - Caso algum atributo esteja inválido, o usuário deve ser impossibilitado de partir para a próxima etapa do cadastro

1.2 - Se a data de nascimento constar que o usuário tem menos de 18 anos
1.3 - Se o CPF do usuário retornar um nome e um RG diferentes daqueles digitados anteriormente
1.4 - Se o Endereço do usuário estiver errado, inválido ou não seja reconhecido.
