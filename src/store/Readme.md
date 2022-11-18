## Store

Директорія для зберігання store, actions, thunk, slice та іншого

Містить такі піддиректорії

- actions — для зберігання actions які використовуються в різних slices (кожен назва файлу відповідає своєму slice)
- api-actions — для зберігання thunk в різних slices (кожен назва файлу відповідає своєму slice)
- middleware — для зберігання middleware
- slices — для зберігання slices. Кожна піддиректорія містить
  - slice.ts — де описуються slice та експортуються відповідні до назви піддиректорії api-actions
  - selectors — де описуються selectors
  - інші допоміжні файли (types, utils)
- index.ts — для експорту slices, root-reducer, store
- root-reducer.ts — для описання root reducer'у
- store.ts — для конфігурування store
