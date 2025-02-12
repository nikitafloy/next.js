import type * as RspackCore from '@rspack/core'

export function getRspackCore(): typeof RspackCore {
  try {
    // eslint-disable-next-line import/no-extraneous-dependencies
    return require('@rspack/core')
  } catch (e) {
    if (e instanceof Error && 'code' in e && e.code === 'MODULE_NOT_FOUND') {
      throw new Error(
        '@rspack/core is not available. Please make sure the appropriate Next.js plugin is installed.'
      )
    }

    throw e
  }
}
