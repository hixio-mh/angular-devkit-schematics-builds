"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const child_process_1 = require("child_process");
const path = require("path");
const rxjs_1 = require("rxjs");
const packageManagers = {
    'npm': {
        quietArgument: '--quiet',
        commands: {
            installAll: 'install',
            installPackage: 'install',
        },
    },
    'cnpm': {
        commands: {
            installAll: 'install',
            installPackage: 'install',
        },
    },
    'yarn': {
        quietArgument: '--silent',
        commands: {
            installPackage: 'add',
        },
    },
    'pnpm': {
        quietArgument: '--silent',
        commands: {
            installAll: 'install',
            installPackage: 'install',
        },
    },
};
class UnknownPackageManagerException extends core_1.BaseException {
    constructor(name) {
        super(`Unknown package manager "${name}".`);
    }
}
exports.UnknownPackageManagerException = UnknownPackageManagerException;
function default_1(factoryOptions = {}) {
    const packageManagerName = factoryOptions.packageManager || 'npm';
    const packageManagerProfile = packageManagers[packageManagerName];
    if (!packageManagerProfile) {
        throw new UnknownPackageManagerException(packageManagerName);
    }
    const rootDirectory = factoryOptions.rootDirectory || process.cwd();
    return (options) => {
        let taskPackageManagerProfile = packageManagerProfile;
        let taskPackageManagerName = packageManagerName;
        if (factoryOptions.allowPackageManagerOverride && options.packageManager) {
            taskPackageManagerProfile = packageManagers[options.packageManager];
            if (!taskPackageManagerProfile) {
                throw new UnknownPackageManagerException(options.packageManager);
            }
            taskPackageManagerName = options.packageManager;
        }
        const outputStream = process.stdout;
        const errorStream = process.stderr;
        const spawnOptions = {
            stdio: [process.stdin, outputStream, errorStream],
            shell: true,
            cwd: path.join(rootDirectory, options.workingDirectory || ''),
        };
        const args = [];
        if (options.packageName) {
            if (options.command === 'install') {
                args.push(packageManagerProfile.commands.installPackage);
            }
            args.push(options.packageName);
        }
        else if (options.command === 'install' && packageManagerProfile.commands.installAll) {
            args.push(packageManagerProfile.commands.installAll);
        }
        if (options.quiet && taskPackageManagerProfile.quietArgument) {
            args.push(taskPackageManagerProfile.quietArgument);
        }
        return new rxjs_1.Observable(obs => {
            child_process_1.spawn(taskPackageManagerName, args, spawnOptions)
                .on('close', (code) => {
                if (code === 0) {
                    obs.next();
                    obs.complete();
                }
                else {
                    const message = 'Package install failed, see above.';
                    obs.error(new Error(message));
                }
            });
        });
    };
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0b3IuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL2FuZ3VsYXJfZGV2a2l0L3NjaGVtYXRpY3MvdGFza3Mvbm9kZS1wYWNrYWdlL2V4ZWN1dG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztHQU1HO0FBQ0gsK0NBQXFEO0FBQ3JELGlEQUFvRDtBQUNwRCw2QkFBNkI7QUFDN0IsK0JBQWtDO0FBWWxDLE1BQU0sZUFBZSxHQUE4QztJQUNqRSxLQUFLLEVBQUU7UUFDTCxhQUFhLEVBQUUsU0FBUztRQUN4QixRQUFRLEVBQUU7WUFDUixVQUFVLEVBQUUsU0FBUztZQUNyQixjQUFjLEVBQUUsU0FBUztTQUMxQjtLQUNGO0lBQ0QsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFO1lBQ1IsVUFBVSxFQUFFLFNBQVM7WUFDckIsY0FBYyxFQUFFLFNBQVM7U0FDMUI7S0FDRDtJQUNGLE1BQU0sRUFBRTtRQUNOLGFBQWEsRUFBRSxVQUFVO1FBQ3pCLFFBQVEsRUFBRTtZQUNSLGNBQWMsRUFBRSxLQUFLO1NBQ3RCO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7UUFDTixhQUFhLEVBQUUsVUFBVTtRQUN6QixRQUFRLEVBQUU7WUFDUixVQUFVLEVBQUUsU0FBUztZQUNyQixjQUFjLEVBQUUsU0FBUztTQUMxQjtLQUNGO0NBQ0YsQ0FBQztBQUVGLE1BQWEsOEJBQStCLFNBQVEsb0JBQWE7SUFDL0QsWUFBWSxJQUFZO1FBQ3RCLEtBQUssQ0FBQyw0QkFBNEIsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0Y7QUFKRCx3RUFJQztBQUVELG1CQUNFLGlCQUFnRCxFQUFFO0lBRWxELE1BQU0sa0JBQWtCLEdBQUcsY0FBYyxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUM7SUFDbEUsTUFBTSxxQkFBcUIsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsRSxJQUFJLENBQUMscUJBQXFCLEVBQUU7UUFDMUIsTUFBTSxJQUFJLDhCQUE4QixDQUFDLGtCQUFrQixDQUFDLENBQUM7S0FDOUQ7SUFFRCxNQUFNLGFBQWEsR0FBRyxjQUFjLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUVwRSxPQUFPLENBQUMsT0FBK0IsRUFBRSxFQUFFO1FBQ3pDLElBQUkseUJBQXlCLEdBQUcscUJBQXFCLENBQUM7UUFDdEQsSUFBSSxzQkFBc0IsR0FBRyxrQkFBa0IsQ0FBQztRQUNoRCxJQUFJLGNBQWMsQ0FBQywyQkFBMkIsSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFO1lBQ3hFLHlCQUF5QixHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLHlCQUF5QixFQUFFO2dCQUM5QixNQUFNLElBQUksOEJBQThCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ2xFO1lBQ0Qsc0JBQXNCLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQztTQUNqRDtRQUVELE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDcEMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxNQUFNLFlBQVksR0FBaUI7WUFDakMsS0FBSyxFQUFHLENBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFFO1lBQ3BELEtBQUssRUFBRSxJQUFJO1lBQ1gsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7U0FDOUQsQ0FBQztRQUNGLE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUUxQixJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDdkIsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDMUQ7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoQzthQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUkscUJBQXFCLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0RDtRQUVELElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSx5QkFBeUIsQ0FBQyxhQUFhLEVBQUU7WUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sSUFBSSxpQkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLHFCQUFLLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQztpQkFDOUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQVksRUFBRSxFQUFFO2dCQUM1QixJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7b0JBQ2QsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNYLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDaEI7cUJBQU07b0JBQ0wsTUFBTSxPQUFPLEdBQUcsb0NBQW9DLENBQUM7b0JBQ3JELEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDL0I7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQTFERCw0QkEwREMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBCYXNlRXhjZXB0aW9uIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHsgU3Bhd25PcHRpb25zLCBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRhc2tFeGVjdXRvciB9IGZyb20gJy4uLy4uL3NyYyc7XG5pbXBvcnQgeyBOb2RlUGFja2FnZVRhc2tGYWN0b3J5T3B0aW9ucywgTm9kZVBhY2thZ2VUYXNrT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbnR5cGUgUGFja2FnZU1hbmFnZXJQcm9maWxlID0ge1xuICBxdWlldEFyZ3VtZW50Pzogc3RyaW5nO1xuICBjb21tYW5kczoge1xuICAgIGluc3RhbGxBbGw/OiBzdHJpbmc7XG4gICAgaW5zdGFsbFBhY2thZ2U6IHN0cmluZztcbiAgfSxcbn07XG5cbmNvbnN0IHBhY2thZ2VNYW5hZ2VyczogeyBbbmFtZTogc3RyaW5nXTogUGFja2FnZU1hbmFnZXJQcm9maWxlIH0gPSB7XG4gICducG0nOiB7XG4gICAgcXVpZXRBcmd1bWVudDogJy0tcXVpZXQnLFxuICAgIGNvbW1hbmRzOiB7XG4gICAgICBpbnN0YWxsQWxsOiAnaW5zdGFsbCcsXG4gICAgICBpbnN0YWxsUGFja2FnZTogJ2luc3RhbGwnLFxuICAgIH0sXG4gIH0sXG4gICdjbnBtJzoge1xuICAgIGNvbW1hbmRzOiB7XG4gICAgICBpbnN0YWxsQWxsOiAnaW5zdGFsbCcsXG4gICAgICBpbnN0YWxsUGFja2FnZTogJ2luc3RhbGwnLFxuICAgIH0sXG4gICB9LFxuICAneWFybic6IHtcbiAgICBxdWlldEFyZ3VtZW50OiAnLS1zaWxlbnQnLFxuICAgIGNvbW1hbmRzOiB7XG4gICAgICBpbnN0YWxsUGFja2FnZTogJ2FkZCcsXG4gICAgfSxcbiAgfSxcbiAgJ3BucG0nOiB7XG4gICAgcXVpZXRBcmd1bWVudDogJy0tc2lsZW50JyxcbiAgICBjb21tYW5kczoge1xuICAgICAgaW5zdGFsbEFsbDogJ2luc3RhbGwnLFxuICAgICAgaW5zdGFsbFBhY2thZ2U6ICdpbnN0YWxsJyxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGNsYXNzIFVua25vd25QYWNrYWdlTWFuYWdlckV4Y2VwdGlvbiBleHRlbmRzIEJhc2VFeGNlcHRpb24ge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICBzdXBlcihgVW5rbm93biBwYWNrYWdlIG1hbmFnZXIgXCIke25hbWV9XCIuYCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oXG4gIGZhY3RvcnlPcHRpb25zOiBOb2RlUGFja2FnZVRhc2tGYWN0b3J5T3B0aW9ucyA9IHt9LFxuKTogVGFza0V4ZWN1dG9yPE5vZGVQYWNrYWdlVGFza09wdGlvbnM+IHtcbiAgY29uc3QgcGFja2FnZU1hbmFnZXJOYW1lID0gZmFjdG9yeU9wdGlvbnMucGFja2FnZU1hbmFnZXIgfHwgJ25wbSc7XG4gIGNvbnN0IHBhY2thZ2VNYW5hZ2VyUHJvZmlsZSA9IHBhY2thZ2VNYW5hZ2Vyc1twYWNrYWdlTWFuYWdlck5hbWVdO1xuICBpZiAoIXBhY2thZ2VNYW5hZ2VyUHJvZmlsZSkge1xuICAgIHRocm93IG5ldyBVbmtub3duUGFja2FnZU1hbmFnZXJFeGNlcHRpb24ocGFja2FnZU1hbmFnZXJOYW1lKTtcbiAgfVxuXG4gIGNvbnN0IHJvb3REaXJlY3RvcnkgPSBmYWN0b3J5T3B0aW9ucy5yb290RGlyZWN0b3J5IHx8IHByb2Nlc3MuY3dkKCk7XG5cbiAgcmV0dXJuIChvcHRpb25zOiBOb2RlUGFja2FnZVRhc2tPcHRpb25zKSA9PiB7XG4gICAgbGV0IHRhc2tQYWNrYWdlTWFuYWdlclByb2ZpbGUgPSBwYWNrYWdlTWFuYWdlclByb2ZpbGU7XG4gICAgbGV0IHRhc2tQYWNrYWdlTWFuYWdlck5hbWUgPSBwYWNrYWdlTWFuYWdlck5hbWU7XG4gICAgaWYgKGZhY3RvcnlPcHRpb25zLmFsbG93UGFja2FnZU1hbmFnZXJPdmVycmlkZSAmJiBvcHRpb25zLnBhY2thZ2VNYW5hZ2VyKSB7XG4gICAgICB0YXNrUGFja2FnZU1hbmFnZXJQcm9maWxlID0gcGFja2FnZU1hbmFnZXJzW29wdGlvbnMucGFja2FnZU1hbmFnZXJdO1xuICAgICAgaWYgKCF0YXNrUGFja2FnZU1hbmFnZXJQcm9maWxlKSB7XG4gICAgICAgIHRocm93IG5ldyBVbmtub3duUGFja2FnZU1hbmFnZXJFeGNlcHRpb24ob3B0aW9ucy5wYWNrYWdlTWFuYWdlcik7XG4gICAgICB9XG4gICAgICB0YXNrUGFja2FnZU1hbmFnZXJOYW1lID0gb3B0aW9ucy5wYWNrYWdlTWFuYWdlcjtcbiAgICB9XG5cbiAgICBjb25zdCBvdXRwdXRTdHJlYW0gPSBwcm9jZXNzLnN0ZG91dDtcbiAgICBjb25zdCBlcnJvclN0cmVhbSA9IHByb2Nlc3Muc3RkZXJyO1xuICAgIGNvbnN0IHNwYXduT3B0aW9uczogU3Bhd25PcHRpb25zID0ge1xuICAgICAgc3RkaW86ICBbIHByb2Nlc3Muc3RkaW4sIG91dHB1dFN0cmVhbSwgZXJyb3JTdHJlYW0gXSxcbiAgICAgIHNoZWxsOiB0cnVlLFxuICAgICAgY3dkOiBwYXRoLmpvaW4ocm9vdERpcmVjdG9yeSwgb3B0aW9ucy53b3JraW5nRGlyZWN0b3J5IHx8ICcnKSxcbiAgICB9O1xuICAgIGNvbnN0IGFyZ3M6IHN0cmluZ1tdID0gW107XG5cbiAgICBpZiAob3B0aW9ucy5wYWNrYWdlTmFtZSkge1xuICAgICAgaWYgKG9wdGlvbnMuY29tbWFuZCA9PT0gJ2luc3RhbGwnKSB7XG4gICAgICAgIGFyZ3MucHVzaChwYWNrYWdlTWFuYWdlclByb2ZpbGUuY29tbWFuZHMuaW5zdGFsbFBhY2thZ2UpO1xuICAgICAgfVxuICAgICAgYXJncy5wdXNoKG9wdGlvbnMucGFja2FnZU5hbWUpO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5jb21tYW5kID09PSAnaW5zdGFsbCcgJiYgcGFja2FnZU1hbmFnZXJQcm9maWxlLmNvbW1hbmRzLmluc3RhbGxBbGwpIHtcbiAgICAgIGFyZ3MucHVzaChwYWNrYWdlTWFuYWdlclByb2ZpbGUuY29tbWFuZHMuaW5zdGFsbEFsbCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucXVpZXQgJiYgdGFza1BhY2thZ2VNYW5hZ2VyUHJvZmlsZS5xdWlldEFyZ3VtZW50KSB7XG4gICAgICBhcmdzLnB1c2godGFza1BhY2thZ2VNYW5hZ2VyUHJvZmlsZS5xdWlldEFyZ3VtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzID0+IHtcbiAgICAgIHNwYXduKHRhc2tQYWNrYWdlTWFuYWdlck5hbWUsIGFyZ3MsIHNwYXduT3B0aW9ucylcbiAgICAgICAgLm9uKCdjbG9zZScsIChjb2RlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICBpZiAoY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzLm5leHQoKTtcbiAgICAgICAgICAgIG9icy5jb21wbGV0ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1BhY2thZ2UgaW5zdGFsbCBmYWlsZWQsIHNlZSBhYm92ZS4nO1xuICAgICAgICAgICAgb2JzLmVycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfTtcbn1cbiJdfQ==