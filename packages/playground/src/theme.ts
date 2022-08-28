export const setEditorTheme = (theme: 'light' | 'dark' | 'hc', editor: typeof import('monaco-editor').editor) => {
  const newTheme = theme ? theme : localStorage ? localStorage.getItem('editor-theme') || 'light' : 'light'

  editor.setTheme(newTheme)

  document
    .querySelectorAll('a[id^=theme-]')
    .forEach(anchor =>
      anchor.id === `theme-${newTheme}`
        ? anchor.classList.add('current-theme')
        : anchor.classList.remove('current-theme')
    )

  localStorage.setItem('editor-theme', newTheme)

  // Establece el tema en el cuerpo para que CSS pueda cambiar entre temas
  document.body.classList.remove('light', 'dark', 'hc')

  // Por tanto dark y dark-hc pueden compartir CSS
  if (newTheme === 'dark-hc') {
    document.body.classList.add('dark')
    document.body.classList.add('hc')
  } else {
    document.body.classList.add(newTheme)
  }
}
