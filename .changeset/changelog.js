/** @type {import('@changesets/types').ChangelogFunctions} */
const changelogFunctions = {
  getReleaseLine: async (changeset) => {
    const summary = changeset.summary
    return `\n\n${summary}`
  },
  getDependencyReleaseLine: async () => '',
}

module.exports = changelogFunctions
