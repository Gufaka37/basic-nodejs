const Catalog = require('./catalog.model');

const catchErrors = require('../../common/catchErrors');
const catalogService = require('./catalog.service');

exports.create = catchErrors(async (req, res) => {
  const catalog = await catalogService.create(req.body);
  if (!catalog) {
    return res
      .status(400)
      .json({ code: 400, msg: 'Catalog not created.'});
  }
  return res.status(201).json(Catalog.toResponse(catalog));
});

exports.getAll = catchErrors(async (req, res) => {
  const catalogs = await catalogService.getAll();
  return res.status(200).json(catalogs.map(Catalog.toResponse));
});

exports.getById = catchErrors(async (req, res) => {
  const catalog = await catalogService.getById(req.params.catalogId);
  if (!catalog) {
    return res
      .status(404)
      .json({ code: 404, msg: 'Catalog not found.' });
  }
  return res.status(200).json(Catalog.toResponse(catalog));
});

exports.updateById = catchErrors(async (req, res) => {
  const catalog = await catalogService.updateById(req.params.catalogId, req.body);
  if (!catalog) {
    return res
      .status(404)
      .json({ code: 404, msg: 'Catalog not found' });
  }
  return res.status(200).json(catalog && Catalog.toResponse(catalog));
});

exports.deleteById = catchErrors(async (req, res) => {
  const catalog = await catalogService.deleteById(req.params.catalogId);
  if (!catalog) {
    return res
      .status(404)
      .json({ code: 404, msg: 'Catalog not found.' });
  }
  return res.status(200).json(Catalog.toResponse(catalog));
})