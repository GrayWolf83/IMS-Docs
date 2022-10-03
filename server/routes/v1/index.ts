import express from 'express'
import positionRoutes from './position.routes'
import departmentRoutes from './department.routes'
import userRoutes from './user.routes'
import authRoutes from './auth.routes'
import systemRoutes from './system.routes'
import documentTypeRoutes from './documentType.routes'

const router = express.Router()

router.use('/position', positionRoutes)
router.use('/department', departmentRoutes)
router.use('/user', userRoutes)
router.use('/auth', authRoutes)
router.use('/system', systemRoutes)
router.use('/documentType', documentTypeRoutes)

export default router
