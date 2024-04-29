import classNames from 'classnames';

export function handleNavLinkIsActive(baseClass: string, classIsActive: string) {
  return ({ isActive }: { isActive: boolean }) =>
    classNames(baseClass, {
      [classIsActive]: isActive,
    });
}