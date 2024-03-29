const QuoteModel = require('./QuoteModel')

const add = async (newQuote) => QuoteModel.create(newQuote)

const list = async () => QuoteModel.find()

const update = async (id, updatedQuote) => QuoteModel.updateOne({ id }, updatedQuote)

const remove = async (id) => QuoteModel.deleteOne({ id })

const getById = async (id) => QuoteModel.findOne({ id })

const filter = async (text) => QuoteModel.findOne({ text })

const removeByAuthor = async (author) => QuoteModel.deleteMany({ author })

const updateQuotesAuthor = async (previousAuthor, updatedAuthor) => QuoteModel.updateMany({ author: previousAuthor }, { author: updatedAuthor })

module.exports = Object.freeze({
  add,
  list,
  update,
  remove,
  getById,
  filter,
  removeByAuthor,
  updateQuotesAuthor
})
