import { createEntityAdapter } from '@reduxjs/toolkit';

import { Hotel } from '~/shared/types/hotel';

export const hotelsAdapter = createEntityAdapter<Hotel>();
