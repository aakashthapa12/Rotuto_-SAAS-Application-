import React from 'react'
import { useLocation } from 'react-router-dom'
import routes from '../routes'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

// Helper function to match dynamic route segments
const matchPath = (path, routePath) => {
  const pathSegments = path.split('/').filter(Boolean)
  const routeSegments = routePath.split('/').filter(Boolean)

  if (pathSegments.length !== routeSegments.length) {
    return false
  }

  return routeSegments.every((segment, index) => {
    return segment.startsWith(':') || segment === pathSegments[index]
  })
}

const getRouteName = (pathname, routes) => {
  for (let route of routes) {
    if (matchPath(pathname, route.path)) {
      return route.name
    }
  }
  return false
}

const getBreadcrumbs = (location) => {
  const breadcrumbs = []
  location.split('/').reduce((prev, curr, index, array) => {
    const currentPathname = `${prev}/${curr}`
    const routeName = getRouteName(currentPathname, routes)
    if (routeName) {
      breadcrumbs.push({
        pathname: currentPathname,
        name: routeName,
        active: index + 1 === array.length ? true : false,
      })
    }
    return currentPathname
  })
  return breadcrumbs
}

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname
  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="my-0">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb, index) => (
        <CBreadcrumbItem
          {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
          key={index}
        >
          {breadcrumb.name}
        </CBreadcrumbItem>
      ))}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
