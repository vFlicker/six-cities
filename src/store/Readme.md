## Store

Директорія для зберігання store, actions, thunk, slice, middleware і т.д.

### Піддиректорії

- actions — для зберігання actions які можуть використовуються в різних slices або api-actions (кожен назва файлу відповідає своєму slice)
- api-actions — для зберігання thunk (кожен назва файлу відповідає своєму slice)
- middleware — для зберігання middleware
- slices — для зберігання slices Кожна піддиректорія містить
  - slice.ts — де описуються slice та експортуються відповідні до назви піддиректорії actions з api-actions
  - selectors — де описуються selectors
  - інші допоміжні файли (types, utils)
- index.ts — для експорту slices, root-reducer, store
- root-reducer.ts — для описання root reducer'у
- store.ts — для конфігурування store
