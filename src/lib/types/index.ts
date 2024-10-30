export interface LineItemModel {
    /** @format int32 */
    id: number;
    /** @format int32 */
    lineNumber: number;
    /** @format int32 */
    projectId: number;
    /** @format int32 */
    activeOrderId?: number | null;
    /** @format int32 */
    disbursedOrderId?: number | null;
    /** @format int32 */
    createdByOrderId?: number | null;
    description: string;
    /** @format double */
    totalAmount?: number | null;
    /** @format double */
    totalDisbursementAmount?: number | null;
    /** @format double */
    totalRetainageAmount?: number | null;
    /** @format double */
    approvedRetainageAmount?: number | null;
    /** @format double */
    approvedDisbursementAmount?: number | null;
    /** @format double */
    previousCompletedPercentage?: number | null;
    /** @format double */
    requestedAmount?: number | null;
    /** @format double */
    inspectorCompletedPercentage?: number | null;
    /** @format double */
    lenderCompletedPercentage?: number | null;
    isApproved: boolean;
    isDeleted: boolean;
    hasRetainage: boolean;
    /** @format date-time */
    createdAt: string;
    /** @format int32 */
    createdById: number;
    /** @format date-time */
    lastModifiedAt?: string | null;
    /** @format int32 */
    lastModifiedById?: number | null;
    /** @format int32 */
    orderBy?: number | null;
}
