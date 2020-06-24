# JSONPLACEHOLDER_TEST

# Requisitos do projeto

## Devera conter os Framewors;
Axios e não o fetch; <br/>
Redux; <br/>
Redux-saga; <br/>
React-navigation; <br/>
Formik; <br/>
yup; <br/>
styled-components; <br/>
reactotron -> Configurado; <br/>


## URL da Doc para os Endpoint:
https://jsonplaceholder.typicode.com/guide.html

## Irá ser usado:
https://jsonplaceholder.typicode.com/posts
e
https://jsonplaceholder.typicode.com/photos
<p>
O app precisar ter um menu Drawer com duas o opções:


## Home: <br/> 
A home irá ter um TabNavigator com duas opções uma para Posts e outra tab para Photos.
Use a criativade e as informações desejadas nos endpoints para criar as listas.

Na tela Photos:
```
Manipular JSON:
[
  {
      "albumId": 2,
      "id": 51,
      "title": "non sunt voluptatem placeat consequuntur rem incidunt",
      "url": "https://via.placeholder.com/600/8e973b",
      "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
  },
  {
    "albumId": 2,
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "url": "https://via.placeholder.com/600/121fa4",
    "thumbnailUrl": "https://via.placeholder.com/150/121fa4"
  }
]

Resultado exemplo:
[
  {
    "id": 1
    "albumId": 2,
    "listaPhotos":
                [ 
                  {
                    "id": 51,
                    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
                    "url": "https://via.placeholder.com/600/8e973b",
                    "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
                  },
                  {
                    "id": 52,
                    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
                    "url": "https://via.placeholder.com/600/121fa4",
                    "thumbnailUrl": "https://via.placeholder.com/150/121fa4"
                  }
                ]
  },
]
```

Após manipular o JSONs, usar dois flatlist: <br/>
Primeiro Flatlist deverá conta o Álbum "Numero do Álbum" Ex: Álbum 1
Segundo Flatlist contera o array de listaPhotos

Como irá funcionar:
Ao clicar no album 1 ira expandir o segundo flatlist "listaPhotos";

Quando clicar em algum item da lista, deverá mostrar os detalhes do item clicado, mesma coisa use a criatividade para construir a tela.
Nessa lista crie um ícone para poder deletar esse item da lista, e não mostrar mais o ítem em tela.

### Tela de Detalhes:
Na tela tem que aparecer 2 ícones (Salvar e Editar) no Header.
Quando clicar em salvar deverá salvar os items e redirecionar a tela para a lista novamente, com o item salvo na lista.
Quando clicar em editar, os campos devem ser liberados para edição, quando clicar em salvar, deverá ser retornado para tela de listagem
com o item atualizado.
Na tela devera mostrar todos os detalhes do item em tela.

### OBS:
Não podem ser atualizado os items IDs.
</p>

### Sair
Quando clicar em sair no menu, quero mostre um alerta dizendo tchau.



