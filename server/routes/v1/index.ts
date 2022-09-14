import express from 'express'
import positionRoutes from './position.routes'
import departmentRoutes from './department.routes'
import userRoutes from './user.routes'
import authRoutes from './auth.routes'

const router = express.Router()

router.use('/position', positionRoutes)
router.use('/department', departmentRoutes)
router.use('/user', userRoutes)
router.use('/auth', authRoutes)

export default router
