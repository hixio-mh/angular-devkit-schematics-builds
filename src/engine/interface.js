"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9zY2hlbWF0aWNzL3NyYy9lbmdpbmUvaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQgeyBsb2dnaW5nIH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBVcmwgfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgRmlsZUVudHJ5LCBNZXJnZVN0cmF0ZWd5LCBUcmVlIH0gZnJvbSAnLi4vdHJlZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGFza0NvbmZpZ3VyYXRpb25HZW5lcmF0b3IsIFRhc2tFeGVjdXRvciwgVGFza0lkIH0gZnJvbSAnLi90YXNrJztcblxuXG4vKipcbiAqIFRoZSBkZXNjcmlwdGlvbiAobWV0YWRhdGEpIG9mIGEgY29sbGVjdGlvbi4gVGhpcyB0eXBlIGNvbnRhaW5zIGV2ZXJ5IGluZm9ybWF0aW9uIHRoZSBlbmdpbmVcbiAqIG5lZWRzIHRvIHJ1bi4gVGhlIENvbGxlY3Rpb25NZXRhZGF0YVQgdHlwZSBwYXJhbWV0ZXIgY29udGFpbnMgYWRkaXRpb25hbCBtZXRhZGF0YSB0aGF0IHlvdVxuICogd2FudCB0byBzdG9yZSB3aGlsZSByZW1haW5pbmcgdHlwZS1zYWZlLlxuICovXG5leHBvcnQgdHlwZSBDb2xsZWN0aW9uRGVzY3JpcHRpb248Q29sbGVjdGlvbk1ldGFkYXRhVCBleHRlbmRzIG9iamVjdD4gPSBDb2xsZWN0aW9uTWV0YWRhdGFUICYge1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGV4dGVuZHM/OiBzdHJpbmdbXTtcbn07XG5cbi8qKlxuICogVGhlIGRlc2NyaXB0aW9uIChtZXRhZGF0YSkgb2YgYSBzY2hlbWF0aWMuIFRoaXMgdHlwZSBjb250YWlucyBldmVyeSBpbmZvcm1hdGlvbiB0aGUgZW5naW5lXG4gKiBuZWVkcyB0byBydW4uIFRoZSBTY2hlbWF0aWNNZXRhZGF0YVQgYW5kIENvbGxlY3Rpb25NZXRhZGF0YVQgdHlwZSBwYXJhbWV0ZXJzIGNvbnRhaW4gYWRkaXRpb25hbFxuICogbWV0YWRhdGEgdGhhdCB5b3Ugd2FudCB0byBzdG9yZSB3aGlsZSByZW1haW5pbmcgdHlwZS1zYWZlLlxuICovXG5leHBvcnQgdHlwZSBTY2hlbWF0aWNEZXNjcmlwdGlvbjxDb2xsZWN0aW9uTWV0YWRhdGFUIGV4dGVuZHMgb2JqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2NoZW1hdGljTWV0YWRhdGFUIGV4dGVuZHMgb2JqZWN0PiA9IFNjaGVtYXRpY01ldGFkYXRhVCAmIHtcbiAgcmVhZG9ubHkgY29sbGVjdGlvbjogQ29sbGVjdGlvbkRlc2NyaXB0aW9uPENvbGxlY3Rpb25NZXRhZGF0YVQ+O1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHByaXZhdGU/OiBib29sZWFuO1xuICByZWFkb25seSBoaWRkZW4/OiBib29sZWFuO1xufTtcblxuXG4vKipcbiAqIFRoZSBIb3N0IGZvciB0aGUgRW5naW5lLiBTcGVjaWZpY2FsbHksIHRoZSBwaWVjZSBvZiB0aGUgdG9vbGluZyByZXNwb25zaWJsZSBmb3IgcmVzb2x2aW5nXG4gKiBjb2xsZWN0aW9ucyBhbmQgc2NoZW1hdGljcyBkZXNjcmlwdGlvbnMuIFRoZSBTY2hlbWF0aWNNZXRhZGF0YVQgYW5kIENvbGxlY3Rpb25NZXRhZGF0YVQgdHlwZVxuICogcGFyYW1ldGVycyBjb250YWluIGFkZGl0aW9uYWwgbWV0YWRhdGEgdGhhdCB5b3Ugd2FudCB0byBzdG9yZSB3aGlsZSByZW1haW5pbmcgdHlwZS1zYWZlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEVuZ2luZUhvc3Q8Q29sbGVjdGlvbk1ldGFkYXRhVCBleHRlbmRzIG9iamVjdCwgU2NoZW1hdGljTWV0YWRhdGFUIGV4dGVuZHMgb2JqZWN0PiB7XG4gIGNyZWF0ZUNvbGxlY3Rpb25EZXNjcmlwdGlvbihuYW1lOiBzdHJpbmcpOiBDb2xsZWN0aW9uRGVzY3JpcHRpb248Q29sbGVjdGlvbk1ldGFkYXRhVD47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBVc2UgYGxpc3RTY2hlbWF0aWNOYW1lc2AuXG4gICAqL1xuICBsaXN0U2NoZW1hdGljcyhjb2xsZWN0aW9uOiBDb2xsZWN0aW9uPENvbGxlY3Rpb25NZXRhZGF0YVQsIFNjaGVtYXRpY01ldGFkYXRhVD4pOiBzdHJpbmdbXTtcbiAgbGlzdFNjaGVtYXRpY05hbWVzKGNvbGxlY3Rpb246IENvbGxlY3Rpb25EZXNjcmlwdGlvbjxDb2xsZWN0aW9uTWV0YWRhdGFUPik6IHN0cmluZ1tdO1xuXG4gIGNyZWF0ZVNjaGVtYXRpY0Rlc2NyaXB0aW9uKFxuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgY29sbGVjdGlvbjogQ29sbGVjdGlvbkRlc2NyaXB0aW9uPENvbGxlY3Rpb25NZXRhZGF0YVQ+KTpcbiAgICAgICAgU2NoZW1hdGljRGVzY3JpcHRpb248Q29sbGVjdGlvbk1ldGFkYXRhVCwgU2NoZW1hdGljTWV0YWRhdGFUPiB8IG51bGw7XG4gIGdldFNjaGVtYXRpY1J1bGVGYWN0b3J5PE9wdGlvblQgZXh0ZW5kcyBvYmplY3Q+KFxuICAgICAgc2NoZW1hdGljOiBTY2hlbWF0aWNEZXNjcmlwdGlvbjxDb2xsZWN0aW9uTWV0YWRhdGFULCBTY2hlbWF0aWNNZXRhZGF0YVQ+LFxuICAgICAgY29sbGVjdGlvbjogQ29sbGVjdGlvbkRlc2NyaXB0aW9uPENvbGxlY3Rpb25NZXRhZGF0YVQ+KTogUnVsZUZhY3Rvcnk8T3B0aW9uVD47XG4gIGNyZWF0ZVNvdXJjZUZyb21VcmwoXG4gICAgdXJsOiBVcmwsXG4gICAgY29udGV4dDogVHlwZWRTY2hlbWF0aWNDb250ZXh0PENvbGxlY3Rpb25NZXRhZGF0YVQsIFNjaGVtYXRpY01ldGFkYXRhVD4sXG4gICk6IFNvdXJjZSB8IG51bGw7XG4gIHRyYW5zZm9ybU9wdGlvbnM8T3B0aW9uVCBleHRlbmRzIG9iamVjdCwgUmVzdWx0VCBleHRlbmRzIG9iamVjdD4oXG4gICAgc2NoZW1hdGljOiBTY2hlbWF0aWNEZXNjcmlwdGlvbjxDb2xsZWN0aW9uTWV0YWRhdGFULCBTY2hlbWF0aWNNZXRhZGF0YVQ+LFxuICAgIG9wdGlvbnM6IE9wdGlvblQsXG4gICk6IE9ic2VydmFibGU8UmVzdWx0VD47XG4gIGNyZWF0ZVRhc2tFeGVjdXRvcihuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRhc2tFeGVjdXRvcj47XG4gIGhhc1Rhc2tFeGVjdXRvcihuYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuXG4gIHJlYWRvbmx5IGRlZmF1bHRNZXJnZVN0cmF0ZWd5PzogTWVyZ2VTdHJhdGVneTtcbn1cblxuXG4vKipcbiAqIFRoZSByb290IEVuZ2luZSBmb3IgY3JlYXRpbmcgYW5kIHJ1bm5pbmcgc2NoZW1hdGljcyBhbmQgY29sbGVjdGlvbnMuIEV2ZXJ5dGhpbmcgcmVsYXRlZCB0b1xuICogYSBzY2hlbWF0aWMgZXhlY3V0aW9uIHN0YXJ0cyBmcm9tIHRoaXMgaW50ZXJmYWNlLlxuICpcbiAqIENvbGxlY3Rpb25NZXRhZGF0YVQgaXMsIGJ5IGRlZmF1bHQsIGEgZ2VuZXJpYyBDb2xsZWN0aW9uIG1ldGFkYXRhIHR5cGUuIFRoaXMgaXMgdXNlZCB0aHJvdWdob3V0XG4gKiB0aGUgZW5naW5lIHR5cGluZ3Mgc28gdGhhdCB5b3UgY2FuIHVzZSBhIHR5cGUgdGhhdCdzIG1lcmdlZCBpbnRvIGRlc2NyaXB0aW9ucywgd2hpbGUgYmVpbmdcbiAqIHR5cGUtc2FmZS5cbiAqXG4gKiBTY2hlbWF0aWNNZXRhZGF0YVQgaXMgYSB0eXBlIHRoYXQgY29udGFpbnMgYWRkaXRpb25hbCB0eXBpbmcgZm9yIHRoZSBTY2hlbWF0aWMgRGVzY3JpcHRpb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW5naW5lPENvbGxlY3Rpb25NZXRhZGF0YVQgZXh0ZW5kcyBvYmplY3QsIFNjaGVtYXRpY01ldGFkYXRhVCBleHRlbmRzIG9iamVjdD4ge1xuICBjcmVhdGVDb2xsZWN0aW9uKG5hbWU6IHN0cmluZyk6IENvbGxlY3Rpb248Q29sbGVjdGlvbk1ldGFkYXRhVCwgU2NoZW1hdGljTWV0YWRhdGFUPjtcbiAgY3JlYXRlQ29udGV4dChcbiAgICBzY2hlbWF0aWM6IFNjaGVtYXRpYzxDb2xsZWN0aW9uTWV0YWRhdGFULCBTY2hlbWF0aWNNZXRhZGF0YVQ+LFxuICAgIHBhcmVudD86IFBhcnRpYWw8VHlwZWRTY2hlbWF0aWNDb250ZXh0PENvbGxlY3Rpb25NZXRhZGF0YVQsIFNjaGVtYXRpY01ldGFkYXRhVD4+LFxuICApOiBUeXBlZFNjaGVtYXRpY0NvbnRleHQ8Q29sbGVjdGlvbk1ldGFkYXRhVCwgU2NoZW1hdGljTWV0YWRhdGFUPjtcbiAgY3JlYXRlU2NoZW1hdGljKFxuICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgY29sbGVjdGlvbjogQ29sbGVjdGlvbjxDb2xsZWN0aW9uTWV0YWRhdGFULCBTY2hlbWF0aWNNZXRhZGF0YVQ+LFxuICApOiBTY2hlbWF0aWM8Q29sbGVjdGlvbk1ldGFkYXRhVCwgU2NoZW1hdGljTWV0YWRhdGFUPjtcbiAgY3JlYXRlU291cmNlRnJvbVVybChcbiAgICB1cmw6IFVybCxcbiAgICBjb250ZXh0OiBUeXBlZFNjaGVtYXRpY0NvbnRleHQ8Q29sbGVjdGlvbk1ldGFkYXRhVCwgU2NoZW1hdGljTWV0YWRhdGFUPixcbiAgKTogU291cmNlO1xuICB0cmFuc2Zvcm1PcHRpb25zPE9wdGlvblQgZXh0ZW5kcyBvYmplY3QsIFJlc3VsdFQgZXh0ZW5kcyBvYmplY3Q+KFxuICAgICAgc2NoZW1hdGljOiBTY2hlbWF0aWM8Q29sbGVjdGlvbk1ldGFkYXRhVCwgU2NoZW1hdGljTWV0YWRhdGFUPixcbiAgICAgIG9wdGlvbnM6IE9wdGlvblQsXG4gICk6IE9ic2VydmFibGU8UmVzdWx0VD47XG4gIGV4ZWN1dGVQb3N0VGFza3MoKTogT2JzZXJ2YWJsZTx2b2lkPjtcblxuICByZWFkb25seSBkZWZhdWx0TWVyZ2VTdHJhdGVneTogTWVyZ2VTdHJhdGVneTtcbn1cblxuXG4vKipcbiAqIEEgQ29sbGVjdGlvbiBhcyBjcmVhdGVkIGJ5IHRoZSBFbmdpbmUuIFRoaXMgc2hvdWxkIGJlIHVzZWQgYnkgdGhlIHRvb2wgdG8gY3JlYXRlIHNjaGVtYXRpY3MsXG4gKiBvciBieSBydWxlcyB0byBjcmVhdGUgb3RoZXIgc2NoZW1hdGljcyBhcyB3ZWxsLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbGxlY3Rpb248Q29sbGVjdGlvbk1ldGFkYXRhVCBleHRlbmRzIG9iamVjdCwgU2NoZW1hdGljTWV0YWRhdGFUIGV4dGVuZHMgb2JqZWN0PiB7XG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBDb2xsZWN0aW9uRGVzY3JpcHRpb248Q29sbGVjdGlvbk1ldGFkYXRhVD47XG4gIHJlYWRvbmx5IGJhc2VEZXNjcmlwdGlvbnM/OiBBcnJheTxDb2xsZWN0aW9uRGVzY3JpcHRpb248Q29sbGVjdGlvbk1ldGFkYXRhVD4+O1xuXG4gIGNyZWF0ZVNjaGVtYXRpYyhcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgYWxsb3dQcml2YXRlPzogYm9vbGVhbixcbiAgKTogU2NoZW1hdGljPENvbGxlY3Rpb25NZXRhZGF0YVQsIFNjaGVtYXRpY01ldGFkYXRhVD47XG4gIGxpc3RTY2hlbWF0aWNOYW1lcygpOiBzdHJpbmdbXTtcbn1cblxuXG4vKipcbiAqIEEgU2NoZW1hdGljIGFzIGNyZWF0ZWQgYnkgdGhlIEVuZ2luZS4gVGhpcyBzaG91bGQgYmUgdXNlZCBieSB0aGUgdG9vbCB0byBleGVjdXRlIHRoZSBtYWluXG4gKiBzY2hlbWF0aWNzLCBvciBieSBydWxlcyB0byBleGVjdXRlIG90aGVyIHNjaGVtYXRpY3MgYXMgd2VsbC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTY2hlbWF0aWM8Q29sbGVjdGlvbk1ldGFkYXRhVCBleHRlbmRzIG9iamVjdCwgU2NoZW1hdGljTWV0YWRhdGFUIGV4dGVuZHMgb2JqZWN0PiB7XG4gIHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBTY2hlbWF0aWNEZXNjcmlwdGlvbjxDb2xsZWN0aW9uTWV0YWRhdGFULCBTY2hlbWF0aWNNZXRhZGF0YVQ+O1xuICByZWFkb25seSBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uPENvbGxlY3Rpb25NZXRhZGF0YVQsIFNjaGVtYXRpY01ldGFkYXRhVD47XG5cbiAgY2FsbDxPcHRpb25UIGV4dGVuZHMgb2JqZWN0PihcbiAgICBvcHRpb25zOiBPcHRpb25ULFxuICAgIGhvc3Q6IE9ic2VydmFibGU8VHJlZT4sXG4gICAgcGFyZW50Q29udGV4dD86IFBhcnRpYWw8VHlwZWRTY2hlbWF0aWNDb250ZXh0PENvbGxlY3Rpb25NZXRhZGF0YVQsIFNjaGVtYXRpY01ldGFkYXRhVD4+LFxuICApOiBPYnNlcnZhYmxlPFRyZWU+O1xufVxuXG5cbi8qKlxuICogQSBTY2hlbWF0aWNDb250ZXh0LiBDb250YWlucyBpbmZvcm1hdGlvbiBuZWNlc3NhcnkgZm9yIFNjaGVtYXRpY3MgdG8gZXhlY3V0ZSBzb21lIHJ1bGVzLCBmb3JcbiAqIGV4YW1wbGUgd2hlbiB1c2luZyBhbm90aGVyIHNjaGVtYXRpY3MsIGFzIHdlIG5lZWQgdGhlIGVuZ2luZSBhbmQgY29sbGVjdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUeXBlZFNjaGVtYXRpY0NvbnRleHQ8Q29sbGVjdGlvbk1ldGFkYXRhVCBleHRlbmRzIG9iamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNjaGVtYXRpY01ldGFkYXRhVCBleHRlbmRzIG9iamVjdD4ge1xuICByZWFkb25seSBkZWJ1ZzogYm9vbGVhbjtcbiAgcmVhZG9ubHkgZW5naW5lOiBFbmdpbmU8Q29sbGVjdGlvbk1ldGFkYXRhVCwgU2NoZW1hdGljTWV0YWRhdGFUPjtcbiAgcmVhZG9ubHkgbG9nZ2VyOiBsb2dnaW5nLkxvZ2dlckFwaTtcbiAgcmVhZG9ubHkgc2NoZW1hdGljOiBTY2hlbWF0aWM8Q29sbGVjdGlvbk1ldGFkYXRhVCwgU2NoZW1hdGljTWV0YWRhdGFUPjtcbiAgcmVhZG9ubHkgc3RyYXRlZ3k6IE1lcmdlU3RyYXRlZ3k7XG4gIGFkZFRhc2s8VD4odGFzazogVGFza0NvbmZpZ3VyYXRpb25HZW5lcmF0b3I8VD4sIGRlcGVuZGVuY2llcz86IEFycmF5PFRhc2tJZD4pOiBUYXNrSWQ7XG59XG5cblxuLyoqXG4gKiBUaGlzIGlzIHVzZWQgYnkgdGhlIFNjaGVtYXRpY3MgaW1wbGVtZW50YXRpb25zIGluIG9yZGVyIHRvIGF2b2lkIG5lZWRpbmcgdG8gaGF2ZSB0eXBpbmcgZnJvbVxuICogdGhlIHRvb2xpbmcuIFNjaGVtYXRpY3MgYXJlIG5vdCBzcGVjaWZpYyB0byBhIHRvb2wuXG4gKi9cbmV4cG9ydCB0eXBlIFNjaGVtYXRpY0NvbnRleHQgPSBUeXBlZFNjaGVtYXRpY0NvbnRleHQ8e30sIHt9PjtcblxuXG4vKipcbiAqIEEgcnVsZSBmYWN0b3J5LCB3aGljaCBpcyBub3JtYWxseSB0aGUgd2F5IHNjaGVtYXRpY3MgYXJlIGltcGxlbWVudGVkLiBSZXR1cm5lZCBieSB0aGUgdG9vbGluZ1xuICogYWZ0ZXIgbG9hZGluZyBhIHNjaGVtYXRpYyBkZXNjcmlwdGlvbi5cbiAqL1xuZXhwb3J0IHR5cGUgUnVsZUZhY3Rvcnk8VCBleHRlbmRzIG9iamVjdD4gPSAob3B0aW9uczogVCkgPT4gUnVsZTtcblxuXG4vKipcbiAqIEEgRmlsZU9wZXJhdG9yIGFwcGxpZXMgY2hhbmdlcyBzeW5jaHJvbm91c2x5IHRvIGEgRmlsZUVudHJ5LiBBbiBhc3luYyBvcGVyYXRvciByZXR1cm5zXG4gKiBhc3luY2hyb25vdXNseS4gV2Ugc2VwYXJhdGUgdGhlbSBzbyB0aGF0IHRoZSB0eXBlIHN5c3RlbSBjYW4gY2F0Y2ggZWFybHkgZXJyb3JzLlxuICovXG5leHBvcnQgdHlwZSBGaWxlT3BlcmF0b3IgPSAoZW50cnk6IEZpbGVFbnRyeSkgPT4gRmlsZUVudHJ5IHwgbnVsbDtcbmV4cG9ydCB0eXBlIEFzeW5jRmlsZU9wZXJhdG9yID0gKHRyZWU6IEZpbGVFbnRyeSkgPT4gT2JzZXJ2YWJsZTxGaWxlRW50cnkgfCBudWxsPjtcblxuXG4vKipcbiAqIEEgc291cmNlIGlzIGEgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgYSBUcmVlIGZyb20gYSBzcGVjaWZpYyBjb250ZXh0LiBBIHJ1bGUgdHJhbnNmb3JtcyBhIHRyZWVcbiAqIGludG8gYW5vdGhlciB0cmVlIGZyb20gYSBzcGVjaWZpYyBjb250ZXh0LiBJbiBib3RoIGNhc2VzLCBhbiBPYnNlcnZhYmxlIGNhbiBiZSByZXR1cm5lZCBpZlxuICogdGhlIHNvdXJjZSBvciB0aGUgcnVsZSBhcmUgYXN5bmNocm9ub3VzLiBPbmx5IHRoZSBsYXN0IFRyZWUgZ2VuZXJhdGVkIGluIHRoZSBvYnNlcnZhYmxlIHdpbGxcbiAqIGJlIHVzZWQgdGhvdWdoLlxuICpcbiAqIFdlIG9iZnVzY2F0ZSB0aGUgY29udGV4dCBvZiBTb3VyY2UgYW5kIFJ1bGUgYmVjYXVzZSB0aGUgc2NoZW1hdGljIGltcGxlbWVudGF0aW9uIHNob3VsZCBub3RcbiAqIGtub3cgd2hpY2ggdHlwZXMgaXMgdGhlIHNjaGVtYXRpYyBvciBjb2xsZWN0aW9uIG1ldGFkYXRhLCBhcyB0aGV5IGFyZSBib3RoIHRvb2xpbmcgc3BlY2lmaWMuXG4gKi9cbmV4cG9ydCB0eXBlIFNvdXJjZSA9IChjb250ZXh0OiBTY2hlbWF0aWNDb250ZXh0KSA9PiBUcmVlIHwgT2JzZXJ2YWJsZTxUcmVlPjtcbmV4cG9ydCB0eXBlIFJ1bGUgPSAodHJlZTogVHJlZSwgY29udGV4dDogU2NoZW1hdGljQ29udGV4dCkgPT4gVHJlZSB8IE9ic2VydmFibGU8VHJlZT4gfCB2b2lkO1xuIl19