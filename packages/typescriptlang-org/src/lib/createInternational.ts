import { IntlShape } from "react-intl"

/**
 * Esto te permitirá definir un área para tu localización y hacer que typescript
 * mantenga las teclas bajo control
 *
 * @param intlUseEffect el resultado de `useIntl()`
 */
export function createInternational<NavSection>(
  intlUseEffect: IntlShape
): (intlKey: keyof NavSection, obj?: any) => string {
  return (k, obj) => intlUseEffect.formatMessage({ id: k as string }, obj)
}
