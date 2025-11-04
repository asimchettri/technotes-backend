const User = require('../models/User')
const Note = require('../models/Note')

const getStats = async (req, res) => {
  try {
    const totalNotes = await Note.countDocuments()
    const activeUsers = await User.countDocuments({ active: true })
    const tasksDue = await Note.countDocuments({ completed: false })

    
    const stats = {
      totalNotes,
      activeUsers,
      tasksDue,
      notesChange: '+12%',
      usersChange: '+5%',
      tasksChange: '-2%',
    }

    res.status(200).json(stats)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error fetching stats' })
  }
}

module.exports = { getStats }
