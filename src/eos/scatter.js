export const getScatterInstance = () => new Promise((resolve, reject) => {
  document.addEventListener('scatterLoaded', scatterExtension => {
    // Scatter will now be available from the window scope.
    // At this stage the connection to Scatter from the application is
    // already encrypted.
    if (window.scatter) {
      resolve(window.scatter)
    }
  })
})
