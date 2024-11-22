import { fn } from '@storybook/test'
import * as date from './date'

export const getFormattedDate = fn(date.getFormattedDate).mockName(
  'getFormattedDate'
)
