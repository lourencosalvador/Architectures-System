# O que é o Design Atômico?
Popularmente conhecido no mundo do design, o Atomic Design ajuda a construir sistemas de design consistentes, sólidos e reutilizáveis. Além disso, no mundo do React, Vue e frameworks que estimulam a componentização, o Atomic Design é usado inconscientemente; mas quando usado da maneira certa, torna-se um poderoso aliado para os desenvolvedores.

O nome Design Atômico vem da ideia de separar os componentes em átomos, moléculas, organismos, modelos e páginas, como na imagem acima. Mas quais são as responsabilidades de cada parte separada?

## Átomos

Os átomos são os menores componentes possíveis, como botões, títulos, entradas ou paletes de cores de eventos, animações e fontes. Eles podem ser aplicados em qualquer contexto, globalmente ou dentro de outros componentes e modelos, além de ter muitos estados, como este exemplo de botão: desativado, pairar, tamanhos diferentes, etc.

## Moléculas

Eles são a composição de um ou mais componentes de átomos. Aqui começamos a compor componentes complexos e reutilizar alguns desses componentes. As moléculas podem ter suas próprias propriedades e criar funcionalidades usando átomos, que possuem qualquer função ou ação por si só.

## Organismos

Organismos são a combinação de moléculas que trabalham juntas ou mesmo com átomos que compõem interfaces mais elaboradas. Neste nível, os componentes começam a ter a forma final, mas eles ainda são assegurados para serem independentes, portáteis e reutilizáveis o suficiente para serem reutilizáveis em qualquer conteúdo.

## Modelos

Nesse estado, paramos de compor componentes e começamos a definir seu contexto. Além disso, os modelos criam relações entre os organismos e outros componentes através de posições, posicionamentos e padrões das páginas, mas não tem qualquer estilo, cor ou componente renderizado. Isso é porque parece um wireframe.

## Páginas

As páginas são as partes de navegação do aplicativo e it’ onde os componentes são distribuídos em um modelo específico. Os componentes obtêm conteúdo real e são conectados a todo o aplicativo. Nesta fase, podemos testar a eficiência do sistema de design para analisar se todos os componentes são independentes o suficiente ou se precisamos dividi-los em partes menores.

## Reagir + Atomic Design

Quando começamos a usar o Atomic Design dentro do React, tivemos que ajustar algumas regras da metodologia para garantir que os componentes fossem reutilizados o máximo possível, que fossem apátridas, sem estilos de posições e margens muito específicas para evitar efeitos colaterais nas páginas de aplicação.

Então, com cada novo componente, perguntámo-nos: “Estes componentes são genéricos o suficiente para evitar especificidade e/ou código repetido em qualquer contexto em que sejam utilizados?”

Assim, fomos capazes de escrever algumas regras:

O Design Atômico deve ter um arquivo de variáveis e deve ser importado por cada componente;
Os átomos devem ser escritos sem margens e posições;
Somente as moléculas e organismos podem definir as posições dos átomos, mas essas pilhas podem ter quaisquer estilos de margens e posições;
Os modelos têm apenas uma função: definir a grade de páginas, mas nunca posições de componentes específicos;
As páginas renderizam os componentes com um template definido e aqui o Atomic Design será conectado ao restante do aplicativo;