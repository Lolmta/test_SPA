let options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }

export const getDate = (str) => {
    let date = new Date(str);
    return date.toLocaleString('en-AU', options)
}