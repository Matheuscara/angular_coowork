## Sonnar Clour

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Matheuscara_angular_coowork&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Matheuscara_angular_coowork)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Matheuscara_angular_coowork&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Matheuscara_angular_coowork)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Matheuscara_angular_coowork&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Matheuscara_angular_coowork)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Matheuscara_angular_coowork&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Matheuscara_angular_coowork)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=Matheuscara_angular_coowork&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=Matheuscara_angular_coowork)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Matheuscara_angular_coowork&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Matheuscara_angular_coowork)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Matheuscara_angular_coowork&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Matheuscara_angular_coowork)

## Quality Gate

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=Matheuscara_angular_coowork)](https://sonarcloud.io/summary/new_code?id=Matheuscara_angular_coowork)

## Projeto Angular Coowork

Este projeto Angular, atualizado para a última versão do Angular CLI, demonstra a implementação avançada de várias tecnologias, incluindo Server-Side Rendering (SSR) para melhoria do SEO e desempenho, Tailwind CSS para estilização utilitária, e PrimeNG para componentes ricos de UI. Além disso, utilizamos os Signals do RxJS para um gerenciamento de estado reativo e eficiente.

# Características

- SSR (Server-Side Rendering): Melhoria no SEO e no carregamento inicial da página.
- Tailwind CSS: Framework CSS para design rápido e responsivo.
- PrimeNG: Biblioteca de componentes de interface de usuário para Angular.
- Signals do RxJS: Nova abordagem para gerenciamento de estado com RxJS, proporcionando maior eficiência.
- Servidor de Desenvolvimento
- Execute ng serve para um servidor de desenvolvimento. Navegue para http://localhost:4200/. A aplicação será recarregada automaticamente se você alterar qualquer arquivo fonte.

# NgRx State vs NgRx SignalsState

Os Signals, uma funcionalidade relativamente nova no RxJS, oferecem uma abordagem diferente para o gerenciamento de estado em aplicações Angular em comparação com os métodos tradicionais. Enquanto o gerenciamento de estado convencional em Angular geralmente envolve o uso de serviços com Observables ou o uso de bibliotecas de estado como NgRx ou Akita, os Signals introduzem uma forma mais simplificada e menos verbosa de gerenciar estados reativos.

Com os Signals, você pode ter um estado reativo de maneira mais direta e menos complexa, sem a necessidade de explicitamente gerenciar streams de observables, subscriptions ou a complexidade de ações e reducers encontrados em soluções mais robustas de gerenciamento de estado. Isso pode tornar o Signals uma opção atraente para cenários onde o gerenciamento de estado precisa ser reativo, mas não necessariamente precisa da robustez completa de uma solução de gerenciamento de estado global como NgRx.

# Porque Signals?

O tipo signal é a nova primitiva reativa do Angular. Seu propósito é manter um valor, assim como uma variável padrão, mas a característica distintiva de um signal é seu comportamento único. Se um signal mudar, ele notificará tudo que dependa dele.

Além disso, o Angular pode usar signals como uma nova abordagem para detectar e acionar mudanças, em vez da abordagem padrão atual de verificar alterações em toda a árvore de componentes.

![Signals vs Zone.js](https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/old-approach-vs-new-signals-approach.jpg?q=50&fit=crop&w=1500&dpr=1.5)


# Formas de voce utilizar signals em seu projeto angular

https://www.angulararchitects.io/blog/angular-signals-your-architecture-5-options/

# Testes

Execute ng test para testes unitários e ng e2e para testes end-to-end, utilizando as mais recentes práticas de teste integradas com Angular.


